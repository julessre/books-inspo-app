import { ExpoResponse } from 'expo-router/server';
import { createUser } from '../database/users';

type User = {
  id: number;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  passwordHash: string;
};

export async function POST(request: Request) {
  const signUp = await createUser();
  return ExpoResponse.json({ signUp });
}
