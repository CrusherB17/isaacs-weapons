import React, { Button, ScrollView } from 'react-native';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { useTailwind } from 'tailwind-rn';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Link, NavigationContainer } from '@react-navigation/native';
import { Weapon } from './components/Weapon';
import { Footer } from './components/Footer';


export function Home() {
  const tw = useTailwind();

  const secondaryCategories = (category) => {
    return <Text style={tw('font-semibold text-lg')}>{category}</Text>;
  };
  return (
      <ScrollView style={tw('flex-1 bg-secondary')}>
        {/* <View style={tw('flex-row justify-around p-2 w-full bg-stone-200')}>
          {secondaryCategories('Rifles')}
          {secondaryCategories('Handguns')}
          {secondaryCategories('Bows')}
      
          {secondaryCategories('Swords')}
          {secondaryCategories('Knives')}
          {secondaryCategories('Axes')}
        </View> */}
  
        <Text style={tw('text-lg')}>Upcoming Weapons</Text>
        <Weapon src={require('../assets/IMG_2038.HEIC.jpeg')}  name='The Dragon Slayer' type="Axe" />
       
        <Text style={tw('text-lg')}>Featured Weapons</Text>
        <Weapon src={require('../assets/IMG_2040.HEIC.jpeg')} name='Slasher' type='Sword' />
        
        <Footer />
      </ScrollView>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}