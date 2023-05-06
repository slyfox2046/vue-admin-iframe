import Vue from 'vue'
import Enum from 'vue-enum' // 引⼊vue-enum
const req = require.context('./', false, /\.js$/) // webpack false 不包括⼦⽬录
const obj = {}
req.keys().forEach(item => {
  const config = req(item)
  if (config.default) {
    Object.assign(obj, config.default) // 拼接js 中 default 的数据
  }
})
const enumInfo = Object.assign(obj)
// console.log(" ~ file: index.js:19 ~ enumInfo", enumInfo);
if (enumInfo) {
  Vue.use(Enum, { enumInfo })
}
