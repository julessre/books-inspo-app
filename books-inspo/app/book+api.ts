import { ExpoResponse } from 'expo-router/server';
import { getBookById } from '../database/books';

export async function GET() {
  const bookDetail = await getBookById('43');
  return ExpoResponse.json({ bookDetail });
}
