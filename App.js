import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import DrawerNavigation from './navigator/Drawer';
import Store from './Store/configureStore'

export default function App() {
    return (
        <Provider store={Store}>
            <SafeAreaProvider>
                <DrawerNavigation/>
            </SafeAreaProvider>
        </Provider>
    );
}
