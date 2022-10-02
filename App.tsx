import { useState } from 'react';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import { AppContainer } from '~components';
import { Start, Game } from '~screens';

import theme from './theme.json';

const App = () => {
  const [userNumber, setUserNumber] = useState<number | null>(null);

  const confirmNumber = (chosenNumber: number) => setUserNumber(chosenNumber);

  return (
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <IconRegistry icons={EvaIconsPack} />

      <AppContainer>
        {userNumber === null ? (
          <Start onConfirm={confirmNumber} />
        ) : (
          <Game userNumber={userNumber} />
        )}
      </AppContainer>
    </ApplicationProvider>
  );
};

export default App;
