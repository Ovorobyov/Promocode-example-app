import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import RenderHtml from 'react-native-render-html';
import Clipboard from '@react-native-clipboard/clipboard';
// Icon
import CopyIcon from '../icons/copy.svg';

export const PromoCodeScreen = ({route, navigation}) => {
  const promocode = route.params.promocode;
  const category = route.params.category;
  const copy = coupon => {
    Clipboard.setString(coupon);
    setCopyText('Скопировано');
  };
  const [copyText, setCopyText] = useState('Скопировать');
  const {width} = useWindowDimensions();
  useEffect(() => {
    navigation.setOptions({
      title: promocode.name,
      headerStyle: {
        backgroundColor: category.theme.primary,
      },
      safeAreaInsets: {top: 20},
    });
  }, [promocode, category, navigation]);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#ffffff',
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      paddingBottom: 5,
      textAlign: 'center',
      color: '#36353A',
    },
    promocodeWrapper: {
      backgroundColor: category.theme.primary,
      paddingVertical: 15,
      paddingHorizontal: 15,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderStyle: 'dashed',
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 150,
      marginTop: 10,
    },
    promocode: {
      fontSize: 18,
      color: '#573E77',
      fontWeight: 'bold',
    },
    copyWrapper: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    copy: {
      paddingLeft: 5,
      backgroundColor: 'transparent',
      fontSize: 18,
      color: '#573E77',
    },
  });
  return (
    <ScrollView style={styles.container}>
      <RenderHtml contentWidth={width} source={{html: promocode.text}} />
      <TouchableOpacity
        onPress={() => copy(promocode.coupon)}
        style={styles.promocodeWrapper}>
        <Text selectable={true} style={styles.promocode}>
          {promocode.coupon}
        </Text>
        <View style={styles.copyWrapper}>
          <CopyIcon width={20} height={20} />
          <Text style={styles.copy}>{copyText}</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};
