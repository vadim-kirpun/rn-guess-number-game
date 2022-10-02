import { memo, PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

import { Text, useStyleSheet } from '@ui-kitten/components';

const NumberContainer = ({ children }: PropsWithChildren<any>) => {
  const styles = useStyleSheet(themedStyles);

  return (
    <View style={styles.container}>
      <Text category="h1" status="primary">
        {children}
      </Text>
    </View>
  );
};

const themedStyles = StyleSheet.create({
  container: {
    width: 140,
    borderWidth: 4,
    borderRadius: 8,
    borderColor: 'color-primary-500',
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default memo(NumberContainer);
