import { useEffect, useState } from 'react';

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

import theme from './theme.json';
import mapping from './mapping.json';

void SplashScreen.preventAutoHideAsync();

const App = () => {
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [isGameOver, setIsGameOver] = useState(false);

  const [fontsLoaded] = useFonts({ Montserrat_400Regular, Montserrat_700Bold });

  const onFinish = () => setIsGameOver(true);

  let screen = <Start onConfirm={setUserNumber} />;
  if (userNumber !== null)
    screen = <Game userNumber={userNumber} onFinish={onFinish} />;
  if (isGameOver) screen = <GameOver />;

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
      <IconRegistry icons={EvaIconsPack} />
      <AppContainer>{screen}</AppContainer>
    </ApplicationProvider>
  );
};

export default App;
