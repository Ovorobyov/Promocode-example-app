import React from 'react';
import {TouchableOpacity, View} from 'react-native';

export default function SearchTubButton({children, onPress, theme}) {
  return (
    <TouchableOpacity
      style={{
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}>
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: theme.primary,
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );
}
