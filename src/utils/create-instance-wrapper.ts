const createInstanceWrapper = <T>(moduleName: string) => {
  let instance: T | null = null
  return {
    get() {
      if (!instance) {
        throw new Error(`${moduleName} module is not initialized.`)
      }
      return instance
    },
    set(value: T) {
      instance = value
    },
  }
}

export default createInstanceWrapper
