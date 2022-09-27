import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  Text,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const App = () => (
  <ApplicationProvider {...eva} theme={eva.dark}>
    <IconRegistry icons={EvaIconsPack} />

    <Layout style={{ flex: 1 }}>
      <Text category="h1">Home</Text>
    </Layout>
  </ApplicationProvider>
);

export default App;
