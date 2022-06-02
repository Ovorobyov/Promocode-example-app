import React from 'react';
import {connect} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Stack Screens
import {CategoriesStackScreen} from '../screens/stack/CategoriesStackScreen';
import {FavoritesScreen} from '../screens/FavoritesScreen';
import {SearchScreen} from '../screens/SearchScreen';

// Icons
import CouponIcon from '../icons/coupon.svg';
import FavoriteIcon from '../icons/favorite.svg';
import SearchIcon from '../icons/search.svg';

// Components
import SearchTubButton from '../components/SearchTubButton';
import {NavigationContainer} from '@react-navigation/native';
import {styles} from '../styles/MainStyle';
import {Text, View} from 'react-native';

const Tab = createBottomTabNavigator();
function Tabs({theme}) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: styles.tabBar,
        }}>
        <Tab.Screen
          name={'Categories'}
          component={CategoriesStackScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 0,
                }}>
                <CouponIcon
                  width={35}
                  height={35}
                  style={{fill: focused ? '#573E77' : '#000000'}}
                />
                <Text style={{color: focused ? '#573E77' : '#000000'}}>
                  Купоны
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name={'Search'}
          component={SearchScreen}
          options={{
            tabBarIcon: () => (
              <SearchIcon
                width={35}
                height={35}
                style={{fill: theme.secondary}}
              />
            ),
            tabBarButton: props => <SearchTubButton theme={theme} {...props} />,
          }}
        />
        <Tab.Screen
          name={'Favorites'}
          component={FavoritesScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 0,
                }}>
                <FavoriteIcon
                  width={35}
                  height={35}
                  style={{fill: focused ? '#573E77' : '#000000'}}
                />
                <Text style={{color: focused ? '#573E77' : '#000000'}}>
                  Избранное
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = state => ({
  theme: state.theme,
});
export default connect(mapStateToProps)(Tabs);
