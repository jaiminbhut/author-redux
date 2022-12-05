import { Colors, hs, Layout, ms, Typography, vs } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: vs(8),
    paddingHorizontal: hs(10),
    borderWidth: ms(1),
    marginVertical: vs(10),
    borderColor: Colors.borderColor,
    backgroundColor: Colors.lightGray,
    borderRadius: ms(4),
    ...Layout.row,
    ...Layout.justifyContentBetween,
    ...Layout.alignItemsCenter,
  },
  textAuthor: { ...Typography._16Regular, flex: 1 },
  textPrice: { ...Typography._16Medium, color: Colors.placeholder },
});

export default styles;
