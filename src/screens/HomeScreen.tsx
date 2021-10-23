import React from 'react';
import { FlatList, View } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import Item from '../components/Item';
import { menuItems } from '../data/menuItem';
import styles from '../theme/AppTheme';

const HomeScreen = () => {
  const itemSeparator = () => (
    <View
      style={{ borderBottomWidth: 1, opacity: 0.4, marginVertical: 5 }}></View>
  );

  return (
    <View style={{ flex: 1, ...styles.globalMargin }}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={item => item.component}
        ListHeaderComponent={() => <HeaderTitle title="Opciones de menu" />}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};

export default HomeScreen;
