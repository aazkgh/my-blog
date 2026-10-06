import 'server-only';

import { readdirSync } from 'node:fs';
import path from 'node:path';

export type Track = {
  /** 화면에 보여줄 이름 = 확장자를 뺀 mp3 파일명 */
  name: string;
  src: string;
};

const MUSIC_DIR = path.join(process.cwd(), 'public', 'music');

/**
 * `public/music` 폴더의 mp3 파일을 파일명 순서대로 재생 목록으로 만든다.
 * 곡을 추가하려면 mp3 파일을 그 폴더에 넣고 다시 빌드(배포)하면 된다.
 */
export function getTracks(): Track[] {
  try {
    return readdirSync(MUSIC_DIR)
      .filter((file) => file.toLowerCase().endsWith('.mp3'))
      .sort((a, b) => a.localeCompare(b, 'ko', { numeric: true }))
      .map((file) => ({
        name: file.replace(/\.mp3$/i, ''),
        src: `/music/${encodeURIComponent(file)}`,
      }));
  } catch {
    return [];
  }
}
