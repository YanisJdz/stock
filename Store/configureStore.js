import {createStore} from 'redux'
import cart from './Reducers/cartReducer'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}
const persistedReducer = persistReducer(persistConfig, cart);

export let store = createStore(persistedReducer);
export let persistor = persistStore(store);

// export default createStore(cart)