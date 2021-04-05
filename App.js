import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import DrawerNavigation from './navigator/Drawer';
import {store,persistor} from './Store/configureStore';
import {PersistGate} from 'redux-persist/es/integration/react'

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor} >
                <SafeAreaProvider>
                    <DrawerNavigation/>
                </SafeAreaProvider>
            </PersistGate>
        </Provider>
    );
}
