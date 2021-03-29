import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import DrawerNavigation from './navigator/Drawer';

export default function App() {
    return (
        <SafeAreaProvider>
            <DrawerNavigation/>
        </SafeAreaProvider>
    );
}
