import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './Button.styles';

export function Button({ title, disabled, ...rest }) {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.btnAdd, disabled && styles.disabled]}
      {...rest}>
      <Text style={styles.textAdd}>{title}</Text>
    </TouchableOpacity>
  );
}
