import { Image, StyleSheet, View } from 'react-native';

export default function MapImage() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Poland_location_map.svg/1200px-Poland_location_map.svg.png',
        }}
        style={styles.mapImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapImage: {
    width: 300,
    height: 200,
  },
});
