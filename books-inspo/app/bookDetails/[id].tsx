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
  const [singleBook, setSingleBook] = useState<Book>();
  // const [isLoading, setIsLoading] = useState(true);

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
      setSingleBook(fetchedBook.bookDetail);
      console.log(fetchedBook);
      // setIsLoading(false);
    }
    getBookById().catch(console.error);
  }, [id]);

  if (!singleBook) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* {isLoading ? (
        <View style={styles.container}>
          <Text>Loading Book Details...</Text>
        </View>
      ) : ( */}
      <>
        <Text>{singleBook.author}</Text>
        <Text>{singleBook.description}hallo </Text>
        <Image source={{ uri: singleBook.coverImageLink }} />
      </>
      {/* )} */}
    </View>
  );
}
