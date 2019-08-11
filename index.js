class 불안정정신 {
  constructor () { }
}

class 안정화된정신 {
  constructor (정신) {
    if (!정신 instanceof 불안정정신) {
      console.error(new Error('정신을 안정시키는데 실패하였습니다'))
    }
  }
}

class 딱구 {
  constructor () { }

  집어넣기 (머리) {
    if (!this.딱구머리) {
      this.딱구머리 = 머리 instanceof 안정화된정신 ? 머리 : null
      this.정체 = '딱구의 정체는 *혼종*'
    } else console.error(new Error('딱구 머릿속이 비어있지 않습니다'))
  }
}

module.exports = {
  딱구: 딱구,
  안정화된정신: 안정화된정신,
  불안정정신: 불안정정신
}
