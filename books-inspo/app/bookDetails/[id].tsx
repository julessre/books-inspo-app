import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../styles/constants';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.background,
//   },
//   text: {
//     color: colors.text,
//   },
// });

type Book = {
  id: string;
  title: string;
  author: string;
  publishingYear: number;
  description: string;
  numberOfPages: number;
  coverImageLink: string;
};

export default function BookDetailsPage() {
  const { id } = useLocalSearchParams();

  const [book, setBook] = useState<Book>();

  useEffect(() => {
    async function callBook() {
      if (typeof id !== 'string') {
        return;
      }
      const response = await fetch(`/books/${id}`);
      const fetchedBook = await response.json();
      setBook(fetchedBook.showBooks);
      console.log(fetchedBook);
    }
    callBook().catch(console.error);
  }, [id]);

  if (!book) {
    return null;
  }

  return (
    <View>
      <Text>
        {book.title} {book.author} {book.description} {book.publishingYear}{' '}
        {book.numberOfPages}
      </Text>
    </View>
  );
}
