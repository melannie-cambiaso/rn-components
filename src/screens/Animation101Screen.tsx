import React from 'react';
import { useRef } from 'react';
import { Animated, Button, Easing, StyleSheet, View } from 'react-native';
import useAnimation from '../hooks/useAnimation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  purpleBox: {
    backgroundColor: '#6638f0',
    width: 150,
    height: 150,
    marginBottom: 20
  }
});

const Animation101Screen = () => {
  const { opacity, position, fadeIn, fadeOut, startMoving } = useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity,
          transform: [{ translateY: position }]
        }}
      />

      <Button
        onPress={() => {
          fadeIn();
          startMoving(100, 300);
        }}
        title="Fade In"
      />
      <Button onPress={fadeOut} title="Fade Out" />
    </View>
  );
};

export default Animation101Screen;
