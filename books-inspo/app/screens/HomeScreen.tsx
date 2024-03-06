import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../styles/constants';
import BookItem from '../_components/GuestItem';

export type Book = {
  id: number;
  title: string;
  author: string;
  publishingYear: number;
  description: string;
  numberOfPages: number;
  coverImageLink: string;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoBox: {
    flex: 0.4,
    backgroundColor: colors.background,
    // alignItems: 'left',
    // justifyContent: 'left',
    // borderTopRightRadius: 50,
    // borderTopLeftRadius: 50,
    borderTopColor: colors.primaryColor,
    borderTopStyle: 'solid',
    borderTopWidth: 4,
    padding: 20,
    elevation: 5, // for Android
  },
  textHeadline: {
    fontSize: 35,
    color: colors.text,
    fontFamily: 'Raleway-Bold',
  },
  textAuthor: {
    fontSize: 25,
    color: colors.text,
    fontFamily: 'Raleway-Italic',
  },
});

const renderItem = (item: { item: Book }) => <BookItem book={item.item} />;

export default function HomeScreen() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function callApi() {
      const response = await fetch('/books');
      const fetchedBooks = await response.json();
      // const selectedBooks = fetchedBooks.slice(0, 3);
      setBooks(fetchedBooks);
      console.log(fetchedBooks);
    }
    callApi().catch(console.error);
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text>Bild</Text>
      </View>
      <View style={styles.infoBox}>
        <Text
          style={styles.textHeadline}
          onPress={() => alert('This is the Home Screen.')}
        >
          Cleopatra and Frankenstein
        </Text>
        <Text style={styles.textAuthor}>von Coco Mellors</Text>
        <FlatList
          data={books}
          renderItem={renderItem}
          keyExtractor={(item: Book) => item.id}
        />
      </View>
    </>
  );
}
