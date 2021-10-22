import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  purpleBox: {
    backgroundColor: '#6638f0',
    width: 150,
    height: 150
  }
});

const Animation102Screen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBox} />
    </View>
  );
};

export default Animation102Screen;
