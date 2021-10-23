import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { MenuItem } from '../interfaces/interfaces';

interface Props {
  item: MenuItem;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemText: {
    marginLeft: 10,
    fontSize: 19
  }
});

const Item = ({ item }: Props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(item.component as any)}>
      <View style={styles.container}>
        <Icon color="#6638f0" name={item.icon} size={23} />
        <Text style={styles.itemText}>{item.name}</Text>
        <View style={{ flex: 1 }}></View>
        <Icon color="#6638f0" name="chevron-forward-outline" size={23} />
      </View>
    </TouchableOpacity>
  );
};

export default Item;
