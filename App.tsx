import { useState } from 'react';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import { Start, Game, GameOver } from '~screens';
import { AppContainer } from '~components';

import theme from './theme.json';

const App = () => {
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [isGameOver, setIsGameOver] = useState(false);

  const onFinish = () => setIsGameOver(true);

  let screen = <Start onConfirm={setUserNumber} />;
  if (userNumber !== null)
    screen = <Game userNumber={userNumber} onFinish={onFinish} />;
  if (isGameOver) screen = <GameOver />;

  return (
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <IconRegistry icons={EvaIconsPack} />
      <AppContainer>{screen}</AppContainer>
    </ApplicationProvider>
  );
};

export default App;
