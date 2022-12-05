import { Colors, hs, ms, Typography, vs } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputBox: {
    marginVertical: vs(8),
    borderRadius: ms(8),
    ...Typography._16Regular,
    backgroundColor: Colors.lightGray,
    paddingHorizontal: hs(16),
    height: vs(40),
    paddingVertical: 0,
    borderColor: Colors.borderColor,
    borderWidth: 1,
  },
});

export default styles;
