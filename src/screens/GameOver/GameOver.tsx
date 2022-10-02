import { memo } from 'react';
import { Image, View } from 'react-native';

import { Button, Text, useStyleSheet } from '@ui-kitten/components';

import themedStyles from './GameOver.styles';

interface IGameOver {
  userNumber: number;
  rounds: number;
  resetGame: () => void;
}

const GameOver = (props: IGameOver) => {
  const { userNumber, rounds, resetGame } = props;

  const styles = useStyleSheet(themedStyles);

  return (
    <View style={styles.container}>
      <Text category="h1">Game over!</Text>

      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/success.png')}
          style={{ width: '100%', height: '100%' }}
        />
      </View>

      <Text style={styles.summary}>
        Your phone needed <Text category="h5">{rounds}</Text> rounds to guess
        the number <Text category="h5">{userNumber}</Text>.
      </Text>

      <Button onPress={resetGame}>Start a new game</Button>
    </View>
  );
};

export default memo(GameOver);
