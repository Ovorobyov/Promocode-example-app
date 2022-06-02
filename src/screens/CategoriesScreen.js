import React, {useEffect} from 'react';
import {ScrollView, StatusBar, View} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {CardPreview} from '../components/CardPreview';
import {connect} from 'react-redux';

// Styles
import {styles} from '../styles/MainStyle';
// Redux
import store from '../app/store';
import {setTheme} from '../app/actions/themeActions';
import {getCoupons} from '../app/actions/apiActions';

function CategoriesScreen({navigation, coupons}) {
  const isFocused = useIsFocused();
  useEffect(() => {
    store.dispatch(getCoupons());
  }, []);
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  useEffect(() => {
    if (isFocused) {
      store.dispatch(setTheme('#573E77', '#ffffff'));
    }
  }, [isFocused]);

  return (
    <ScrollView style={styles.categoriesContainer}>
      <StatusBar backgroundColor={'#f5f5f5'} barStyle={'dark-content'} />
      <View style={{marginBottom: 150}}>
        {coupons.coupons.length
          ? coupons.coupons.map((category, index) => {
              return (
                <CardPreview
                  key={index}
                  navigation={navigation}
                  category={category}
                />
              );
            })
          : null}
      </View>
    </ScrollView>
  );
}

const mapStateToProps = state => ({
  coupons: state.coupons,
});
export default connect(mapStateToProps)(CategoriesScreen);
