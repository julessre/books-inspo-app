import { ExpoRequest, ExpoResponse } from 'expo-router/server';
import { getBookById } from '../database/books';
import { Books } from '../migrations/00004-createTableBooks';

type BookParams = {
  params: {
    bookId: string;
  };
};

export async function GET(params) {
  console.log(params);
  const bookDetail = await getBookById(params.bookId);
  return ExpoResponse.json({ bookDetail });
}
