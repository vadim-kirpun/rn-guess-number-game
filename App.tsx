import { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as SplashScreen from 'expo-splash-screen';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

import { Start, Game, GameOver } from '~screens';
import { AppContainer } from '~components';

import { useIsLandscape } from './src/hooks';
import mapping from './mapping.json';
import theme from './theme.json';

void SplashScreen.preventAutoHideAsync();

const App = () => {
  const [rounds, setRounds] = useState(0);
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [isGameOver, setIsGameOver] = useState(false);

  const [fontsLoaded] = useFonts({ Montserrat_400Regular, Montserrat_700Bold });
  const isLandscape = useIsLandscape();

  const onFinish = (rounds: number) => {
    setIsGameOver(true);
    setRounds(rounds);
  };

  const resetGame = () => {
    setRounds(0);
    setUserNumber(null);
    setIsGameOver(false);
  };

  let screen = <Start onConfirm={setUserNumber} />;

  if (userNumber != null)
    screen = (
      <Game
        userNumber={userNumber}
        onFinish={onFinish}
        isLandscape={isLandscape}
      />
    );

  if (isGameOver && userNumber != null)
    screen = (
      <GameOver
        userNumber={userNumber}
        rounds={rounds}
        resetGame={resetGame}
        isLandscape={isLandscape}
      />
    );

  useEffect(() => {
    if (fontsLoaded) void SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <ApplicationProvider
      {...eva}
      theme={{ ...eva.light, ...theme }}
      customMapping={mapping}
    >
      <SafeAreaProvider>
        <IconRegistry icons={EvaIconsPack} />
        <AppContainer>{screen}</AppContainer>
      </SafeAreaProvider>
    </ApplicationProvider>
  );
};

export default App;
