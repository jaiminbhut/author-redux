import { addBook } from '@/actions/BookActions';
import { BookItem, Button, InputField } from '@/components';
import { generateUUID, has, isNull } from '@/helper';
import { strings } from '@/lang';
import { getBookByAuthor } from '@/selectors/book';
import { Typography } from '@/theme';
import { useRoute } from '@react-navigation/native';
import React, { createRef, useCallback, useMemo, useState } from 'react';
import { Alert, FlatList, Keyboard, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Book.styles';

const inputRef = {
  name: createRef(),
  price: createRef(),
};

// Render books
const BookList = ({ data }) => {
  return (
    <FlatList
      data={has('books', data) ? data.books : []}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={
        <View style={styles.viewEmpty}>
          <Text style={Typography._12Medium}>{strings.noBookFound}</Text>
        </View>
      }
      renderItem={({ item, index }) => {
        return <BookItem row={item} />;
      }}
    />
  );
};

export function Book() {
  const [bookName, setBookName] = useState('');
  const [bookPrice, setBookPrice] = useState('');
  const data = useSelector(getBookByAuthor);
  const route = useRoute();
  const dispatch = useDispatch();

  // Get selected author data.
  const item = useMemo(() => {
    return route.params?.item ?? {};
  }, [route.params?.item]);

  // This method is use for get books by author.
  const books = useMemo(() => {
    return data.find((book) => book.authorId === item?.id);
  }, [data, item?.id]);

  // This method is use for add new book.
  const handleAddBook = useCallback(() => {
    const filteredBooks =
      has('books', books) && !isNull(books.books)
        ? books.books.filter(
            (book) =>
              book.name.trim().toLowerCase() === bookName.trim().toLowerCase(),
          )
        : [];

    if (filteredBooks.length > 0) {
      Alert.alert(strings.bookAlreadyExist, strings.pleaseTryAgain);
    } else {
      dispatch(
        addBook(item?.id, {
          name: bookName.trim(),
          bookPrice: bookPrice.trim(),
          id: generateUUID(),
        }),
      );
      setBookPrice('');
      setBookName('');
    }
  }, [books, item?.id, bookName, dispatch, bookPrice]);

  // This method is use for make 2 decimal book price.
  const priceChange = useCallback((text) => {
    if (text.includes('.')) {
      const strAfterDot = text.split('.', 2)[1];

      if (strAfterDot.length <= 2) {
        setBookPrice(text);
      } else {
        const strBeforeDot = text.split('.', 1)[0];
        setBookPrice(strBeforeDot + '.' + strAfterDot.substring(0, 2));
      }
    } else {
      setBookPrice(text);
    }
  }, []);

  return (
    <View style={styles.container}>
      <InputField
        mRef={inputRef.name}
        onChangeText={(text) => setBookName(text)}
        placeholder={strings.bookNamePlaceHolder}
        value={bookName}
        returnKeyType="next"
        customContainer={styles.inputContainer}
        onSubmitEditing={() => inputRef.price.current?.focus()}
      />
      <InputField
        mRef={inputRef.price}
        onChangeText={(text) => priceChange(text)}
        placeholder={strings.bookPricePlaceHolder}
        value={`${bookPrice}`}
        keyboardType="decimal-pad"
        customContainer={styles.inputContainer}
        onSubmitEditing={() => Keyboard.dismiss()}
      />
      <Button
        disabled={isNull(bookName) || isNull(bookPrice)}
        title={strings.add}
        onPress={handleAddBook}
      />
      <BookList data={books} />
    </View>
  );
}
