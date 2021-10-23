import React from 'react';
import { Alert, Button, View } from 'react-native';
import prompt from 'react-native-prompt-android';
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

  const showPrompt = () =>
    prompt(
      'Esta seguro?',
      'Mensaje',
      (valor: string) => console.log('info', valor),
      {
        type: 'plain-text'
      }
    );

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alert" />

      <Button title="Mostrar alerta" onPress={showAlert} />
      <View style={{ height: 10 }} />
      <Button title="Mostrar prompt" onPress={showPrompt} />
    </View>
  );
};

export default AlertScreen;
