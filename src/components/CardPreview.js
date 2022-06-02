import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const CardPreview = ({category, navigation}) => {
  return (
    <View
      onTouchEnd={() => navigation.navigate('Category', {category})}
      style={[{backgroundColor: category.theme.primary}, styles.card]}>
      <Text style={styles.title}>{category.name}</Text>
      <Text style={styles.description}>{category.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    height: 150,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 25,
  },
  title: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 17,
    paddingBottom: 5,
  },
  description: {
    fontSize: 15,
  },
});
