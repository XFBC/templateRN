import * as React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import TelaExemploSegundaScreen from './src/screens/TelaExemploSegundaScreen';
import { NavigationContainer } from '@react-navigation/native';
import NotificacaoScreen from './src/screens/NotificacaoScreen';
import TelaExemploPrimeiraScreen from './src/screens/TelaExemploPrimeiraScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Convites" component={TelaExemploPrimeiraScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Boleto" component={TelaExemploSegundaScreen} options={{ headerShown: false }} />
        <Stack.Screen name="NotificacaoScreen" component={NotificacaoScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
