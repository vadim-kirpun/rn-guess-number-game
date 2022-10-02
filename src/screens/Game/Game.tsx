import { memo, useRef, useState } from 'react';
import { Alert, View } from 'react-native';

import {
  Button,
  ButtonGroup,
  Icon,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';

import { NumberContainer } from '~components';

import { generateRandomNumber } from './helpers';

import themedStyles from './Game.styles';

interface IGame {
  userNumber: number;
  onFinish: (rounds: number) => void;
}

const Game = ({ userNumber, onFinish }: IGame) => {
  const min = useRef(1);
  const max = useRef(100);
  const rounds = useRef(0);

  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(min.current, max.current, userNumber)
  );

  const styles = useStyleSheet(themedStyles);

  const onNextGuess = (isHigher: boolean) => {
    const isWrongPress =
      (isHigher && currentGuess > userNumber) ||
      (!isHigher && currentGuess < userNumber);

    if (isWrongPress) {
      Alert.alert('Wrong!', 'Hint is wrong.');
      return;
    }

    if (isHigher) min.current = currentGuess + 1;
    else max.current = currentGuess;

    const newGuess = generateRandomNumber(
      min.current,
      max.current,
      currentGuess
    );

    rounds.current += 1;

    if (newGuess === userNumber) onFinish(rounds.current);
    else setCurrentGuess(newGuess);
  };

  return (
    <View style={styles.container}>
      <Text category="h1" style={{ marginBottom: 32 }}>
        Opponent&apos;s Guess
      </Text>

      <NumberContainer>{currentGuess}</NumberContainer>

      <View style={styles.higherOrLower}>
        <Text category="h4">Higher or lower?</Text>

        <ButtonGroup size="giant" style={{ marginTop: 16 }}>
          <Button
            onPress={() => onNextGuess(false)}
            accessoryLeft={(props) => <Icon {...props} name="minus-outline" />}
          />

          <Button
            onPress={() => onNextGuess(true)}
            accessoryLeft={(props) => <Icon {...props} name="plus-outline" />}
          />
        </ButtonGroup>
      </View>
    </View>
  );
};

export default memo(Game);
