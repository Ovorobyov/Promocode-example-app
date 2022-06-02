import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const PromoCodePreview = ({promocode, navigation, category}) => {
  return (
    <View
      onTouchEnd={() => {
        navigation.navigate('PromoCode', {promocode, navigation, category});
      }}
      style={styles.promocode}>
      <View
        style={{
          backgroundColor: category.theme.primary,
          ...styles.promocode.label,
        }}>
        <Text
          style={{
            color: category.theme.secondary,
            ...styles.promocode.label.text,
          }}>
          Discount
        </Text>
      </View>
      <View style={styles.promocode.info}>
        <Text style={styles.promocode.info.title}>{promocode.name}</Text>
        <View style={styles.promocode.info.subinfo}>
          <View style={styles.promocode.info.subinfo.date}>
            <Text style={styles.promocode.info.subinfo.date.title}>
              Истекает
            </Text>
            <Text style={styles.promocode.info.subinfo.date.expirie}>
              30.09.2022
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: category.theme.primary,
              ...styles.promocode.info.subinfo.button,
            }}>
            <Text
              style={{
                color: category.theme.secondary,
                ...styles.promocode.info.subinfo.button.text,
              }}>
              Подробнее
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  promocode: {
    margin: 25,
    marginBottom: 0,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 150,
    label: {
      paddingTop: 65,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
      text: {
        fontWeight: 'bold',
        fontSize: 16,
        marginHorizontal: -15,
        textTransform: 'uppercase',
        transform: [{rotate: '-90deg'}],
      },
    },
    info: {
      width: '85%',
      paddingVertical: 10,
      paddingHorizontal: 10,
      title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
      },
      subinfo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        date: {
          title: {
            fontSize: 14,
          },
          expirie: {
            fontWeight: 'bold',
          },
        },
        button: {
          paddingVertical: 15,
          paddingHorizontal: 25,
          borderRadius: 10,
          text: {fontSize: 14},
        },
      },
    },
  },
});
