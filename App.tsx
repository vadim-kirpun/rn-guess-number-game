import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import theme from './theme.json';
import Start from './src/screens/Start';
import AppContainer from './src/components/AppContainer';

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <IconRegistry icons={EvaIconsPack} />

      <AppContainer>
        <Start />
      </AppContainer>
    </ApplicationProvider>
  );
};

export default App;
