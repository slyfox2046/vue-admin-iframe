/**
 * localStorage 封装
 */

export default {
  setItem(key, value) {
    const storage = this.getStorage()
    storage[key] = value
    window.localStorage.setItem(process.env.VUE_APP_NAMESPACE, JSON.stringify(storage))
  },
  getItem(key) {
    return this.getStorage()[key]
  },
  getStorage() {
    return JSON.parse(window.localStorage.getItem(process.env.VUE_APP_NAMESPACE) || '{}')
  },
  clearItem(key) {
    const storage = this.getStorage()
    delete storage[key]
    window.localStorage.setItem(process.env.VUE_APP_NAMESPACE, JSON.stringify(storage))
  },
  clearAll() {
    // 这里要根据namespace 清除
    // window.localStorage.clear()
    window.localStorage.removeItem(process.env.VUE_APP_NAMESPACE)
  }
}

