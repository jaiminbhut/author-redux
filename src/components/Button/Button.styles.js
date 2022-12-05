import { Colors, hs, Layout, ms, Typography, vs } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  btnAdd: {
    backgroundColor: Colors.blue,
    paddingHorizontal: hs(10),
    paddingVertical: vs(10),
    borderRadius: ms(4),
    marginVertical: vs(8),
    ...Layout.alignItemsCenter,
  },
  disabled: {
    backgroundColor: Colors.placeholder,
  },
  textAdd: {
    ...Typography._12Medium,
    color: Colors.white,
  },
});

export default styles;
