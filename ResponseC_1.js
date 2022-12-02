export default {
  summary: {
    a: '최적',
    reqTime: '~시간 ~분',
    depTime: '1시 ~분',
    arrTime: '1시 ~분',
  },
  data: [
    {
      type: '도보',
      time: '~분',
      message: '회기역 1번출구까지 이동',
    },
    {
      type: '기타',
      time: '~분',
      message: '1번 출구 옆 엘리베이터 이용',
    },
    {
      type: '지하철',
      time: '~분',
      message: ['1호선 회기역 승차', '구로역 방면', '신길역 하차'],
    },
    {
      type: '도보',
      time: '~분',
      message: '목적지 이동',
    },
  ],
}
