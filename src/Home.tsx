import { Image, SafeAreaView, Text, View } from 'react-native';
import { useTailwind } from 'tailwind-rn';

export function Home() {
  const tw = useTailwind();
  return (
    <SafeAreaView style={tw('flex-1')}>
      <View style={tw('bg-black')}>
        <Text style={tw('text-center text-stone-200 font-bold text-xl p-3')}>
          Isaac's List of WEAPONS
        </Text>
      </View>
      <View style={tw('flex-row justify-around bg-red-900 p-2 w-full')}>
        <Text style={tw('text-stone-200 font-semibold text-lg')}>Rifles</Text>
        <Text style={tw('text-stone-200 font-semibold text-lg')}>Handguns</Text>
        <Text style={tw('text-stone-200 font-semibold text-lg')}>Swords</Text>
        <Text style={tw('text-stone-200 font-semibold text-lg')}>Knives</Text>
        <Text style={tw('text-stone-200 font-semibold text-lg')}>Axes</Text>
      </View>
      <View style={tw('flex-row justify-start h-1/2 flex-wrap')}>
        <Image
          style={tw('w-1/2 h-1/2')}
          source={require('../assets/IMG_2038.HEIC.jpeg')}
        ></Image>
        <View>
          <Text style={tw('')}>Name : The Dragon Slayer</Text>
          <Text style={tw('')}>Type : Replica</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
