import { Colors, hs, Layout, ms, Typography, vs } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: hs(20),
  },
  inputContainer: {},
  btnAdd: {
    backgroundColor: Colors.blue,
    paddingHorizontal: hs(10),
    paddingVertical: vs(10),
    borderRadius: ms(4),
    marginTop: vs(8),
    ...Layout.alignItemsCenter,
  },
  textAdd: {
    ...Typography._12Medium,
    color: Colors.white,
  },
  viewEmpty: {
    ...Layout.alignItemsCenter,
  },
});

export default styles;
