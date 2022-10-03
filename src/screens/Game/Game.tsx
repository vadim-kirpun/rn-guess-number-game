import { memo, useRef, useState } from 'react';
import { Alert, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  Button,
  ButtonGroup,
  Card,
  Icon,
  List,
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

  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(min.current, max.current, userNumber)
  );
  const [rounds, setRounds] = useState<Array<{ round: number; guess: number }>>(
    [{ round: 1, guess: currentGuess }]
  );

  const styles = useStyleSheet(themedStyles);
  const { top, bottom } = useSafeAreaInsets();

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

    if (newGuess === userNumber) {
      onFinish(rounds.length + 1);
      return;
    }

    setCurrentGuess(newGuess);
    setRounds((prev) => [{ round: prev.length + 1, guess: newGuess }, ...prev]);
  };

  return (
    <View style={[styles.container, { paddingTop: top + 16 }]}>
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

      <List
        data={rounds}
        style={styles.roundsContainer}
        contentContainerStyle={{ paddingBottom: bottom }}
        ItemSeparatorComponent={() => <View style={{ marginBottom: 8 }} />}
        renderItem={({ item }) => (
          <Card status="primary" appearance="filled">
            <View style={styles.logItem}>
              <Text category="h5">#{item.round}</Text>
              <Text>
                Opponent&apos;s Guess: <Text category="h5">{item.guess}</Text>
              </Text>
            </View>
          </Card>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default memo(Game);
