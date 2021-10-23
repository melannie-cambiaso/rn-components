import React, { useState } from 'react';
import { View } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import HeaderTitle from '../components/HeaderTitle';

const SwitchScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  return (
    <View style={{ marginHorizontal: 20 }}>
      <HeaderTitle title="Switches" />
      <Switch
        trackColor={{ false: '#D9D9D8', true: '#6638f0' }}
        thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default SwitchScreen;
