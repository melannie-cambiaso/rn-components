import React from 'react';
import { FlatList, ListRenderItem, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import Item from '../components/Item';
import { MenuItem } from '../interfaces/interfaces';
import styles from '../theme/AppTheme';

const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101'
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102'
  }
];

const HomeScreen = () => {
  const renderHeaderList = () => (
    <View style={{ marginTop: 20, marginBottom: 20 }}>
      <Text style={styles.title}>Opciones de menú</Text>
    </View>
  );

  const itemSeparator = () => (
    <View
      style={{ borderBottomWidth: 1, opacity: 0.4, marginVertical: 5 }}></View>
  );

  const { top } = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, ...styles.globalMargin }}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={item => item.component}
        ListHeaderComponent={renderHeaderList}
        ListHeaderComponentStyle={{ marginTop: top + 20 }}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};

export default HomeScreen;
