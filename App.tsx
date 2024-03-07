import { StyleSheet } from 'react-native';
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
import { useTailwind } from 'tailwind-rn';
import { Home } from './src/Home';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Info } from './src/Info';
import { Header } from './src/components/Header';
import { Weapons } from './src/Weapons';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

type RootStackParamList = {
  Home: undefined
  Weapons: undefined
  Info: undefined
};

export default function App() {
  // const tailwind = useTailwind();
  const Stack = createNativeStackNavigator<RootStackParamList>();


  return (
    <NavigationContainer>
      <TailwindProvider utilities={utilities}>
        <Stack.Navigator initialRouteName="Home" screenOptions={{header: () => <Header/> }}>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Weapons" component={Weapons} />
          <Stack.Screen name="Info" component={Info} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
