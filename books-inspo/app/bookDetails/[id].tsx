import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../styles/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  text: {
    color: colors.text,
  },

  textHeadline: {
    fontSize: 35,
    color: colors.text,
    fontFamily: 'Raleway-Bold',
    paddingBottom: 10,
  },
  textAuthor: {
    fontSize: 25,
    color: colors.text,
    fontFamily: 'Raleway-Italic',
  },
  image: {
    flex: 0.5,
    resizeMode: 'contain',
    marginTop: 20,
    marginBottom: 20,
    overflow: 'hidden',
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
      const response = await fetch(`/${id}`, {
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
        <Text style={styles.textHeadline}>{singleBook.title}</Text>
        <Text style={styles.textAuthor}>{singleBook.author}</Text>
        <Image
          source={{ uri: singleBook.coverImageLink }}
          style={styles.image}
        />
        <Text>{singleBook.publishingYear} </Text>
        <Text>{singleBook.numberOfPages} </Text>
        <Text>{singleBook.description} </Text>
      </>
      {/* )} */}
    </View>
  );
}
