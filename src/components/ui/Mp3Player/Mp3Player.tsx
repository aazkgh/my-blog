'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import Window from '@/components/ui/Window/Window';
import type { Track } from '@/lib/tracks';

import * as styles from './Mp3Player.css';

const INITIAL_VOLUME = 0.5;
const GESTURE_EVENTS = ['pointerdown', 'keydown'] as const;

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <svg className={styles.icon} viewBox="0 0 16 16" aria-hidden="true">
      {children}
    </svg>
  );
}

export default function Mp3Player({ tracks }: { tracks: Track[] }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const rootRef = useRef<HTMLElement>(null);
  const detachGestureRef = useRef<(() => void) | null>(null);
  const wantPlayRef = useRef(true); // 사용자가 일시정지하기 전까지는 계속 재생하려는 의도
  const failCountRef = useRef(0);

  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  const count = tracks.length;
  const track = tracks[index];

  const detachGesture = useCallback(() => {
    detachGestureRef.current?.();
    detachGestureRef.current = null;
  }, []);

  /** 재생을 시도하고, 브라우저가 자동재생을 막으면 첫 사용자 입력 때 다시 시도한다. */
  const tryPlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || !wantPlayRef.current) return;

    audio.play().catch((error: unknown) => {
      if ((error as DOMException)?.name !== 'NotAllowedError' || detachGestureRef.current) return;

      const onGesture = (e: Event) => {
        // 플레이어 안의 클릭은 버튼 동작에 맡긴다 (재생 직후 다시 토글되는 것 방지)
        if (rootRef.current?.contains(e.target as Node)) return;
        detachGesture();
        tryPlay();
      };
      GESTURE_EVENTS.forEach((name) => window.addEventListener(name, onGesture));
      detachGestureRef.current = () => GESTURE_EVENTS.forEach((name) => window.removeEventListener(name, onGesture));
    });
  }, [detachGesture]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = INITIAL_VOLUME;
    return detachGesture;
  }, [detachGesture]);

  // 곡이 바뀔 때마다(처음 접속 포함) 재생 시도
  useEffect(() => {
    setFailed(false);
    tryPlay();
  }, [index, tryPlay]);

  const go = useCallback(
    (delta: 1 | -1) => {
      if (count === 1) {
        if (audioRef.current) audioRef.current.currentTime = 0;
        tryPlay();
        return;
      }
      setIndex((i) => (i + delta + count) % count);
    },
    [count, tryPlay]
  );

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      wantPlayRef.current = true;
      detachGesture();
      tryPlay();
    } else {
      wantPlayRef.current = false;
      audio.pause();
    }
  }, [detachGesture, tryPlay]);

  // 잠금화면·미디어 키 연동
  useEffect(() => {
    if (!track || !('mediaSession' in navigator)) return;
    navigator.mediaSession.metadata = new MediaMetadata({ title: track.name });
    navigator.mediaSession.setActionHandler('previoustrack', () => go(-1));
    navigator.mediaSession.setActionHandler('nexttrack', () => go(1));
    return () => {
      navigator.mediaSession.setActionHandler('previoustrack', null);
      navigator.mediaSession.setActionHandler('nexttrack', null);
    };
  }, [track, go]);

  if (!track) return null;

  const label = failed ? '음악 파일을 찾을 수 없어요' : track.name;
  const scrolling = playing && !failed;

  return (
    <section ref={rootRef} className={styles.player} aria-label="MP3 플레이어">
      <audio
        ref={audioRef}
        src={track.src}
        preload="auto"
        onPlay={() => {
          failCountRef.current = 0;
          detachGesture();
          setPlaying(true);
        }}
        onPause={() => setPlaying(false)}
        onEmptied={() => setPlaying(false)}
        onEnded={() => go(1)}
        onError={() => {
          setFailed(true);
          setPlaying(false);
          failCountRef.current += 1;
          // 목록 전체가 재생 불가일 때 무한 반복하지 않도록 한 바퀴만 시도
          if (count > 1 && failCountRef.current < count) go(1);
        }}
      />

      <Window title="MP3">
      <div className={styles.content}>
      <div className={styles.display} role="status">
        {scrolling ? (
          <div className={styles.marquee} style={{ animationDuration: `${Math.max(8, label.length * 0.45)}s` }}>
            <span className={styles.marqueeItem}>{label}</span>
            <span className={styles.marqueeItem} aria-hidden="true">
              {label}
            </span>
          </div>
        ) : (
          <span className={styles.staticText}>{label}</span>
        )}
      </div>

      <div className={styles.controls}>
        <button type="button" className={styles.button} onClick={() => go(-1)} aria-label="이전 곡">
          <Icon>
            <rect x="2" y="2" width="2" height="12" />
            <polygon points="14,2 5,8 14,14" />
          </Icon>
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={toggle}
          aria-label={playing ? '일시정지' : '재생'}
          aria-pressed={playing}>
          <Icon>
            {playing ? (
              <>
                <rect x="3" y="2" width="3.5" height="12" />
                <rect x="9.5" y="2" width="3.5" height="12" />
              </>
            ) : (
              <polygon points="4,2 14,8 4,14" />
            )}
          </Icon>
        </button>
        <button type="button" className={styles.button} onClick={() => go(1)} aria-label="다음 곡">
          <Icon>
            <rect x="12" y="2" width="2" height="12" />
            <polygon points="2,2 11,8 2,14" />
          </Icon>
        </button>
      </div>
      </div>
      </Window>
    </section>
  );
}
