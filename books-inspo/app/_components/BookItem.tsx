import { router } from 'expo-router';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../styles/constants';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: 'white',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  itemContainer: {
    flexDirection: 'column', // or 'column' depending on your layout preference
    width,
    height,
  },
  image: {
    flex: 12,
    height: 100,
    resizeMode: 'cover',
  },
  infoBox: {
    backgroundColor: colors.background,
    borderTopColor: colors.primaryColor,
    borderTopStyle: 'solid',
    borderTopWidth: 4,
    padding: 20,
    paddingBottom: 0,
    flex: 4,
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

type Book = {
  id: string;
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
  const { id, title, author, coverImageLink } = book;
  // const openBook = () => {
  //   router.push({
  //     pathname: `/books/[id]`,
  //     params: { id },
  //   });
  // };

  return (
    <SafeAreaView style={styles.itemContainer}>
      <Image source={{ uri: coverImageLink }} style={styles.image} />
      <View style={styles.infoBox}>
        <TouchableOpacity
        // onPress={openBook}
        >
          <Text style={styles.textHeadline}>{title} </Text>
          <Text style={styles.textAuthor}>{author} </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
