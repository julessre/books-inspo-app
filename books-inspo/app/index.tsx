import { useFonts } from 'expo-font';
import React, { useEffect, useState } from 'react';
// import Slider from './_components/Slider';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Books } from '../migrations/00004-createTableBooks';
import { colors } from '../styles/constants';
import Navigation from './_components/Navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  const [books, setBooks] = useState<Books[]>([]);
  useEffect(() => {
    async function callApi() {
      const response = await fetch(`/books`);
      const fetchedBooks: Books[] = await response.json();
      const selectedBooks = fetchedBooks.slice(0, 3);
      setBooks(selectedBooks);
      console.log(selectedBooks);
    }
    callApi().catch(console.error);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      {/* <Slider /> */}
      {/* <div>
        <FlatList data={books} />
      </div> */}
      <Navigation />
    </SafeAreaView>
  );
}
