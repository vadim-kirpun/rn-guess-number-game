import { memo, PropsWithChildren } from 'react';
import { ImageBackground, SafeAreaView } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@ui-kitten/components';

const AppContainer = ({ children }: PropsWithChildren) => {
  const theme = useTheme();

  return (
    <LinearGradient
      colors={[theme['color-primary-100'], theme['color-warning-200']]}
      style={{ flex: 1 }}
    >
      <ImageBackground
        source={require('../../assets/background.png')}
        imageStyle={{ opacity: 0.1 }}
        style={{ flex: 1 }}
      >
        <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
};

export default memo(AppContainer);
