import { Colors } from '@/theme';
import React from 'react';
import { TextInput, View } from 'react-native';
import styles from './Input.styles';

export function Input({
  mRef,
  placeholder,
  value,
  onChangeText,
  customContainer,
  ...rest
}) {
  return (
    <View style={[customContainer]}>
      <TextInput
        ref={mRef}
        style={styles.inputBox}
        placeholder={placeholder}
        value={value}
        placeholderTextColor={Colors.placeholder}
        onChangeText={onChangeText}
        {...rest}
      />
    </View>
  );
}
