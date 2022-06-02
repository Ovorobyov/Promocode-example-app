import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    background: '#ffffff',
    borderRadius: 15,
    height: 70,
    shadowColor: '#573E77',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  categoriesContainer: {
    paddingTop: 20,
    backgroundColor: '#f5f5f5',
  },
  categoryContainer: {backgroundColor: '#f5f5f5'},
});
