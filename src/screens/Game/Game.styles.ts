import { StyleSheet } from 'react-native';

const themedStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  landscapeActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginBottom: 16,
    borderWidth: 2,
    borderColor: 'text-basic-color',
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
  higherOrLower: {
    marginTop: 32,
    alignItems: 'center',
  },
  roundsContainer: {
    backgroundColor: 'transparent',
    width: '100%',
    marginTop: 32,
  },
  logItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default themedStyles;
