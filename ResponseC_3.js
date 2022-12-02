export default {
  summary: {
    a: '최소 환승',
    reqTime: '~시간 ~분',
    depTime: '3시 ~분',
    arrTime: '3시 ~분',
  },
  data: [
    {
      type: '도보',
      time: '~분',
      message: '정발산역 1번출구까지 이동',
    },
    {
      type: '기타',
      time: '~분',
      message: '1번 출구 옆 엘리베이터 이용',
    },
    {
      type: '지하철',
      time: '~분',
      message: ['3호선 정발산역 승차', '~~역 방면', '마두역 하차'],
    },
    {
      type: '도보',
      time: '~분',
      message: '목적지 이동',
    },
  ],
}
