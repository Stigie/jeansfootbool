import { IStore } from './'
import createInstanceWrapper from '../utils/create-instance-wrapper'

const storeInstance = createInstanceWrapper<IStore>('Store')

export default storeInstance
