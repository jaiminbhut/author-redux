import { StyleSheet } from 'react-native';
import { Colors } from './colors';
import { ms } from './spacing';

export const typography = StyleSheet.create({
  _12Medium: {
    fontWeight: '500',
    fontSize: ms(12),
    color: Colors.text,
  },
  _16Medium: {
    fontWeight: '500',
    fontSize: ms(16),
    color: Colors.text,
  },
  _16Regular: {
    fontSize: ms(16),
    color: Colors.text,
  },
});
