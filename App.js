import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Aboout, VideoList, VideoPlayer } from './views';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Video List" component={VideoList} />
          <Stack.Screen name="Video Player" component={VideoPlayer} />
        </Stack.Navigator>
      </NavigationContainer>
      <Aboout />
      <StatusBar style="auto" />
    </View>
  );
}
