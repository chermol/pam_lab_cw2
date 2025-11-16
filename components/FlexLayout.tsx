import React from 'react';
import { View, StyleSheet } from 'react-native';

const FlexLayout: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top} />
      <View style={styles.middle} />
      <View style={styles.bottomRow}>
        <View style={styles.bottomBox} />
        <View style={styles.bottomBox} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  top: {
    flex: 1,
    backgroundColor: 'blue',
    margin: 8,
    borderRadius: 8,
  },
  middle: {
    flex: 2,
    backgroundColor: 'red',
    marginHorizontal: 8,
    marginVertical: 4,
    borderRadius: 8,
  },
  bottomRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    margin: 8,
  },
  bottomBox: {
    flex: 1,
    backgroundColor: 'yellow',
    marginHorizontal: 4,
    borderRadius: 8,
  },
});

export default FlexLayout;
