import { memo, useState } from 'react';
import { View } from 'react-native';

import { Text, useStyleSheet } from '@ui-kitten/components';

import { NumberContainer } from '~components';

import { generateRandomNumber } from './helpers';

import themedStyles from './Game.styles';

interface IGame {
  userNumber: number;
}

const Game = ({ userNumber }: IGame) => {
  const [currentGuess] = useState(generateRandomNumber(1, 100, userNumber));

  const styles = useStyleSheet(themedStyles);

  return (
    <View style={styles.container}>
      <Text category="h1" style={{ marginBottom: 32 }}>
        Opponent&apos;s Guess
      </Text>

      <NumberContainer>{currentGuess}</NumberContainer>
    </View>
  );
};

export default memo(Game);
