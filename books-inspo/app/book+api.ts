import { ExpoResponse } from 'expo-router/server';
import { getBookById } from '../database/books';

export async function GET() {
  console.log('test backend');
  const singleBook = await getBookById('43');
  console.log(singleBook);
  return ExpoResponse.json({ singleBook });
}
