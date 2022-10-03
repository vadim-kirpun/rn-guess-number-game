import { Dimensions, StyleSheet } from 'react-native';

const imageSide = Dimensions.get('window').width * 0.7;

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
    width: imageSide,
    height: imageSide,
    borderRadius: imageSide / 2,
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
