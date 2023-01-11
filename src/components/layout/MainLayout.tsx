import React from 'react'
import { SafeAreaView } from 'react-native';
import BottomNavigation from './BottomNavigation';
import Header from './Header';

export default function MainLayout({ children, path, navigation, headerTitle, type, logout }: { children: JSX.Element, path: string, navigation: any, headerTitle: string, type?: 'home' | 'internal', logout?: any }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ececec' }}>
      <Header title={headerTitle} type={type} logout={logout} />
      {children}
      <BottomNavigation active={path} navigation={navigation} />
    </SafeAreaView>
  )
}
