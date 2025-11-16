import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DateDisplay from './components/DateDisplay';
import MapImage from './components/MapImage';
import PizzaText from './components/PizzaText';
import UserName from './components/UserName';
import UserSurname from './components/UserSurname';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
      <Text>{new Date().toLocaleString()}</Text>
      <DateDisplay />
      <MapImage />
      <PizzaText />
      <UserName name="Maciej" />
      <UserSurname surname="Chermol" />
      <StatusBar style="auto" />
    </View>
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
