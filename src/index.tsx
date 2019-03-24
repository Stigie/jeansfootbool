import App from './app'
import Store from './store'
import storeInstance from './store/instance'

export default () => {
  const store = Store.create()
  storeInstance.set(store)
  
  return App
}
