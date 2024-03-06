import { ExpoRequest, ExpoResponse } from 'expo-router/server';
import { getBooks } from '../database/books';

export async function GET(request: ExpoRequest) {
  const body = await request.json();
  console.log(body);
  const showBooks = await getBooks();
  console.log(showBooks);
  return ExpoResponse.json({ message: showBooks });
}
