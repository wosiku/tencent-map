class TencentMap {
  constructor() {
      this.mapKey = 'GAABZ-5WMCD-FJS4D-HE65Z-FHEZQ-AAF2G';
      this.mapVer = '1.exp';
      this.mapApi = 'https://map.qq.com/api/gljs';
  }

  load(config) {
      if (typeof config == 'object') {
          if (config.mapKey) {
              this.mapKey = config.mapKey
          }
          if (config.mapVer) {
              this.mapVer = config.mapVer
          }
          if (config.mapApi) {
              this.mapApi = config.mapApi
          }
      }
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.id = 'InitQQMap'
      script.src = this.mapApi + '?v=' + this.mapVer + '&key=' + this.mapKey
      const head = document.getElementsByTagName('head')[0] || document.body
      const consts = document.getElementById(script.id)
      if (consts) {
          head.removeChild(consts)
      }
      head.appendChild(script)
      window.QQMapAuthorVue = 'Jared.Yan (Yanhuaiwen@163.com)'
      return new Promise((resolve, reject) => {
          window.InitQQMap = () => {
              try {
                  if (typeof resolve == 'function') {
                      resolve(window.qq || {})
                  } else {
                      throw new Error('resolve must function')
                  }
              } catch (e) {
                  reject(e)
              }
          }
      })
  }
}
export default new TencentMap()