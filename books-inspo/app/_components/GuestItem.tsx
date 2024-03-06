import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

// const styles = StyleSheet.create({
//   right: {
//     textAlign: 'right',
//     fontSize: 10,
//   },
//   center: {
//     textAlign: 'center',
//   },
//   card: {
//     backgroundColor: colors.cardBackground,
//     paddingTop: 10,
//     paddingLeft: 30,
//     paddingRight: 30,
//     paddingBottom: 10,
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     borderRadius: 30,
//     marginBottom: 30,
//     borderColor: colors.cardShadow,
//     borderWidth: 0.5,
//     borderTopWidth: 0,
//     borderLeftWidth: 0,
//     borderBottomRightRadius: 30,
//     borderBottomLeftRadius: 30,
//     borderTopRightRadius: 30,
//     textAlign: 'left',
//   },
// });

export type Book = {
  id: number;
  title: string;
  author: string;
  publishingYear: number;
  description: string;
  numberOfPages: number;
  coverImageLink: string;
};

type Props = {
  book: Book;
};

export default function BookItem({ book }: Props) {
  const {
    id,
    title,
    author,
    publishingYear,
    description,
    numberOfPages,
    coverImageLink,
  } = book;
  const openBook = () => {
    router.push({
      pathname: `/books/[id]`,
      params: { id },
    });
  };
  return (
    <TouchableOpacity onPress={openBook}>
      <Text>
        {title} {author}
      </Text>
    </TouchableOpacity>
  );
}
