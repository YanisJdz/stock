import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import DrawerNavigation from './navigator/Drawer';

export default function App() {
    return (
        <SafeAreaProvider>
            <DrawerNavigation/>
        </SafeAreaProvider>
    );
}
