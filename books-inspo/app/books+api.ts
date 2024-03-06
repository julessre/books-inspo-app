import { ExpoResponse } from 'expo-router/server';
import { getBooks } from '../database/books';

export async function GET() {
  const showBooks = await getBooks();
  console.log(showBooks);
  return ExpoResponse.json({ showBooks });
}
