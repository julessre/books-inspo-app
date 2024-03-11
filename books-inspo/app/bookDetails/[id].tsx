import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../styles/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  text: {
    color: colors.text,
  },
});

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getBookById() {
      if (typeof id !== 'string') {
        return;
      }
      const response = await fetch('/book', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const fetchedBook = await response.json();
      setBook(fetchedBook);
      console.log(fetchedBook);
      setIsLoading(false);
    }
    getBookById().catch(console.error);
  }, []);

  if (!book) {
    return null;
  }

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.container}>
          <Text>Loading Book Details...</Text>
        </View>
      ) : (
        <>
          <Text>{book.author}</Text>
          <Text>{book.description}</Text>
          <Image source={{ uri: book.coverImageLink }} />
        </>
      )}
    </View>
  );
}
