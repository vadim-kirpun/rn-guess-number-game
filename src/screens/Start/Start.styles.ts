import { StyleSheet } from 'react-native';

const themedStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 16,
  },
  form: {
    marginTop: 32,
    padding: 16,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: 'color-primary-900',
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    width: '100%',
  },
  input: {
    marginTop: 16,
    marginBottom: 32,
    borderBottomWidth: 2,
    height: 50,
    width: 50,
    fontSize: 32,
    borderColor: 'color-warning-300',
    color: 'color-warning-300',
    textAlign: 'center',
    alignSelf: 'center',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reset: {
    flex: 1,
    marginRight: 8,
  },
});

export default themedStyles;
