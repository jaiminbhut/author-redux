import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './AuthorItem.styles';

export function AuthorItem({ row, onItemPress }) {
  return (
    <TouchableOpacity style={[styles.container]} onPress={onItemPress}>
      <Text style={styles.textAuthor}>{row.name}</Text>
    </TouchableOpacity>
  );
}
