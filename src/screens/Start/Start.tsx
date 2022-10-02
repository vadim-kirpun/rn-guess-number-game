import { memo, useState } from 'react';
import { Alert, TextInput, View } from 'react-native';

import { Button, Text, useStyleSheet } from '@ui-kitten/components';

import themedStyles from './Start.styles';

interface IStart {
  onConfirm: (chosenNumber: number) => void;
}

const Start = ({ onConfirm }: IStart) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  const styles = useStyleSheet(themedStyles);

  const onChangeText = (value: string) => setEnteredNumber(value);

  const reset = () => setEnteredNumber('');

  const confirm = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0) {
      Alert.alert(
        'Invalid number!',
        'Please, enter a number between 1 and 99.',
        [{ text: 'OK', style: 'destructive', onPress: reset }]
      );

      return;
    }

    onConfirm(chosenNumber);
  };

  const disabled = enteredNumber.trim().length === 0;

  return (
    <View style={styles.container}>
      <Text category="h1">Guess My Number</Text>

      <View style={styles.form}>
        <Text category="h5" appearance="alternative">
          Enter a number
        </Text>

        <TextInput
          value={enteredNumber}
          onChangeText={onChangeText}
          keyboardType="number-pad"
          style={styles.input}
          maxLength={2}
          autoFocus
        />

        <View style={styles.buttons}>
          <Button onPress={reset} style={styles.reset} disabled={disabled}>
            Reset
          </Button>

          <Button onPress={confirm} style={{ flex: 1 }} disabled={disabled}>
            Confirm
          </Button>
        </View>
      </View>
    </View>
  );
};

export default memo(Start);
