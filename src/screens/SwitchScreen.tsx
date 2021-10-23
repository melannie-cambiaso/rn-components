import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Switch } from '../components';
import HeaderTitle from '../components/HeaderTitle';

const SwitchScreen = () => {
  const [state, setState] = useState({
    isActive: false,
    isHungry: false,
    isHappy: true
  });

  const onChange = (value: boolean, field: keyof typeof state) => {
    setState({
      ...state,
      [field]: value
    });
  };

  const { isActive, isHappy, isHungry } = state;

  return (
    <View style={{ marginHorizontal: 20 }}>
      <HeaderTitle title="Switches" />

      <View style={styles.switchRow}>
        <Text style={styles.switchText}>isActive</Text>
        <Switch
          isOn={isActive}
          onChange={value => onChange(value, 'isActive')}
        />
      </View>

      <View style={styles.switchRow}>
        <Text style={styles.switchText}>isHungry</Text>
        <Switch
          isOn={isHungry}
          onChange={value => onChange(value, 'isHungry')}
        />
      </View>

      <View style={styles.switchRow}>
        <Text style={styles.switchText}>isHappy</Text>
        <Switch isOn={isHappy} onChange={value => onChange(value, 'isHappy')} />
      </View>
      <Text style={styles.switchText}>{JSON.stringify(state, null, 5)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5
  },
  switchText: {
    fontSize: 24
  }
});
export default SwitchScreen;
