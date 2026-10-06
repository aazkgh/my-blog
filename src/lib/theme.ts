/** 서버에서 렌더할 때 쓰는 한국 시간 기준 월 (1~12). */
export function getCurrentMonthKST(): number {
  return Number(new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Seoul', month: 'numeric' }).format(new Date()));
}

/**
 * 첫 페인트 전에 방문자의 현재 월로 data-month를 덮어쓰는 인라인 스크립트.
 * 정적 빌드된 HTML의 월이 지났어도 재배포 없이 색이 바뀐다.
 */
export const MONTH_SCRIPT = `try{document.documentElement.dataset.month=String(new Date().getMonth()+1)}catch(e){}`;
