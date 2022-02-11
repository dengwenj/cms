class localCache {
  setCache(key: string, value: any, isLocal: boolean = true) {
    if (isLocal) {
      window.localStorage.setItem(key, JSON.stringify(value))
      return
    }
    window.sessionStorage.setItem(key, JSON.stringify(value))
  }

  getCache(key: string, isLocal: boolean = true) {
    if (isLocal) {
      const value = window.localStorage.getItem(key)
      if (value) {
        return JSON.parse(value)
      }
    }
    const value = window.sessionStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  removeCache(key: string, isLocal: boolean = true) {
    if (isLocal) {
      window.localStorage.removeItem(key)
      return
    }
    window.sessionStorage.removeItem(key)
  }

  clearCache(isLocal: boolean = true) {
    if (isLocal) {
      window.localStorage.clear()
      return
    }
    window.sessionStorage.clear()
  }
}

export default new localCache()
