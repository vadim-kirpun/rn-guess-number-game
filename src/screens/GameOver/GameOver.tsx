import { memo } from 'react';
import { Image, ScrollView, useWindowDimensions, View } from 'react-native';

import { Button, Text, useStyleSheet } from '@ui-kitten/components';

import themedStyles from './GameOver.styles';

interface IGameOver {
  userNumber: number;
  rounds: number;
  resetGame: () => void;
  isLandscape: boolean;
}

const GameOver = (props: IGameOver) => {
  const { userNumber, rounds, resetGame, isLandscape } = props;

  const { width } = useWindowDimensions();

  const styles = useStyleSheet(themedStyles);

  const imageSide = isLandscape ? width * 0.1 : width * 0.8;
  const imageStyle = {
    width: imageSide,
    height: imageSide,
    borderRadius: imageSide / 2,
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text category="h1">Game over!</Text>

      <View style={[styles.imageContainer, imageStyle]}>
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
    </ScrollView>
  );
};

export default memo(GameOver);
