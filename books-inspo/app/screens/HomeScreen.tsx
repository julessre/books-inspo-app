import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../styles/constants';
import BookItem from '../_components/BookItem';

type Book = {
  id: string;
  title: string;
  author: string;
  publishingYear: number;
  description: string;
  numberOfPages: number;
  coverImageLink: string;
};

const renderItem = (item: { item: Book }) => <BookItem book={item.item} />;

export default function HomeScreen() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    async function callApi() {
      const response = await fetch('/books');
      const fetchedBooks = await response.json();
      setBooks(fetchedBooks.showBooks);
      console.log(fetchedBooks);
    }
    callApi().catch(console.error);
  }, []);

  return (
    <SafeAreaView>
      {/* <Text>Bild</Text>
      </View>
      <View style={styles.infoBox}>
        <Text
          style={styles.textHeadline}
          onPress={() => alert('This is the Home Screen.')}
        >
          Cleopatra and Frankenstein
        </Text>
        <Text style={styles.textAuthor}>von Coco Mellors</Text> */}
      <FlatList
        data={books}
        renderItem={renderItem}
        keyExtractor={(item: Book) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={true}
      />
    </SafeAreaView>
  );
}
