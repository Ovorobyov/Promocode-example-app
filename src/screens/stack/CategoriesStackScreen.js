import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Screen
import CategoriesScreen from '../CategoriesScreen';
import {CategoryScreen} from '../CategoryScreen';
import {PromoCodeScreen} from '../PromoCodeScreen';

const CategoriesStack = createStackNavigator();
export const CategoriesStackScreen = () => {
  return (
    <CategoriesStack.Navigator>
      <CategoriesStack.Screen name="Categories" component={CategoriesScreen} />
      <CategoriesStack.Screen name="Category" component={CategoryScreen} />
      <CategoriesStack.Screen name="PromoCode" component={PromoCodeScreen} />
    </CategoriesStack.Navigator>
  );
};
