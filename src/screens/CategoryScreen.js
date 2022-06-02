import React, {useEffect} from 'react';
import {ScrollView, StatusBar, View} from 'react-native';
import {PromoCodePreview} from '../components/PromoCodePreview';

import store from '../app/store';
import {setTheme} from '../app/actions/themeActions';

// Styles
import {styles} from '../styles/MainStyle';

export const CategoryScreen = ({route, navigation}) => {
  const category = route.params.category;
  useEffect(() => {
    store.dispatch(setTheme(category.theme.primary, category.theme.secondary));

    navigation.setOptions({
      title: category.name,
      headerStyle: {
        backgroundColor: category.theme.primary,
      },
      safeAreaInsets: {top: 20},
    });
  }, [category, navigation]);
  return (
    <ScrollView style={styles.categoryContainer}>
      <StatusBar
        backgroundColor={category.theme.primary}
        barStyle={'dark-content'}
      />
      <View>
        {category.coupons.map((promocode, index) => {
          return (
            <PromoCodePreview
              navigation={navigation}
              key={index}
              category={category}
              promocode={promocode}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};
