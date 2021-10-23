import React from 'react';
import { Alert, Button, View } from 'react-native';
import { HeaderTitle } from '../components';
import styles from '../theme/AppTheme';

const AlertScreen = () => {
  const showAlert = () =>
    Alert.alert('Titulo', 'Cuerpo de la alerta', [
      {
        text: 'Cancelar',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive'
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') }
    ]);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alert" />

      <Button title="Mostrar alerta" onPress={showAlert} />
    </View>
  );
};

export default AlertScreen;
