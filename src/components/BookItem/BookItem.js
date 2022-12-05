import React from 'react';
import { Text, View } from 'react-native';
import styles from './BookItem.styles';

export function BookItem({ row }) {
  return (
    <View style={[styles.container]}>
      <Text style={styles.textAuthor}>{row.name}</Text>
      <Text style={styles.textPrice}>{`$${row.bookPrice}`}</Text>
    </View>
  );
}
