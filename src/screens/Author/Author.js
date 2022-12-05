import { addAuthor } from '@/actions/AuthorActions';
import { AuthorItem, Button, InputField } from '@/components';
import { NAVIGATION } from '@/constants';
import { generateUUID, isNull } from '@/helper';
import { strings } from '@/lang';
import { getAuthors } from '@/selectors/author';
import { Typography } from '@/theme';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { Alert, FlatList, Keyboard, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Author.styles';

// Render authors
const AuthorList = ({ data }) => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={
        <View style={styles.viewEmpty}>
          <Text style={Typography._12Medium}>{strings.noAuthorsFound}</Text>
        </View>
      }
      renderItem={({ item, index }) => {
        return (
          <AuthorItem
            row={item}
            onItemPress={() => handleItemClick(item, navigation)}
          />
        );
      }}
    />
  );
};

// navigate to books screen with selected author data
const handleItemClick = (item, navigation) => {
  navigation.navigate(NAVIGATION.book, { item });
};

export function Author() {
  const [authorName, setAuthorName] = useState('');
  const data = useSelector(getAuthors);
  const dispatch = useDispatch();

  // This method is use for add new Author
  const handleAddAuthor = useCallback(() => {
    Keyboard.dismiss();

    const filteredAuthors = !isNull(data)
      ? data.filter(
          (item) =>
            item.name.trim().toLowerCase() === authorName.trim().toLowerCase(),
        )
      : [];

    if (filteredAuthors.length > 0) {
      Alert.alert(strings.authorAlreadyExist, strings.pleaseTryAgain);
    } else {
      dispatch(addAuthor({ name: authorName.trim(), id: generateUUID() }));
      setAuthorName('');
    }
  }, [authorName, data, dispatch]);

  return (
    <View style={styles.container}>
      <View style={[]}>
        <InputField
          onChangeText={(text) => setAuthorName(text)}
          placeholder={strings.authorPlaceHolder}
          value={authorName}
          customContainer={styles.inputContainer}
        />
        <Button
          disabled={isNull(authorName)}
          title={strings.add}
          onPress={handleAddAuthor}
        />
      </View>
      <AuthorList data={data} />
    </View>
  );
}
