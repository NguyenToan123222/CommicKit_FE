import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  section: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  navigationButton: {
    padding: 5,
  },
  navigationText: {
    color: '#007BFF',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
