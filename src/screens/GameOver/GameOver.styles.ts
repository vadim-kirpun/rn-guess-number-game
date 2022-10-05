import { StyleSheet } from 'react-native';

const themedStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  imageContainer: {
    marginVertical: 24,
    borderWidth: 3,
    borderColor: 'color-primary-500',
    overflow: 'hidden',
  },
  summary: {
    textAlign: 'center',
    width: '70%',
    marginBottom: 24,
  },
});

export default themedStyles;
