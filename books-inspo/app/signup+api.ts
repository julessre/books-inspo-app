import { ExpoResponse } from 'expo-router/server';
import { createUser, getUserByUsername } from '../database/users';

type User = {
  id: number;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  passwordHash: string;
};

export async function POST(request: Request) {
  const userData: User = await request.json();
  const { userName, passwordHash, firstName, lastName, email } = userData;

  const newUser = await createUser(
    userName,
    passwordHash,
    firstName,
    lastName,
    email,
  );
  console.log(newUser);
  if (!newUser) {
    //   return ExpoResponse.json({ success: true, user: newUser });
    // } else {
    return ExpoResponse.json(
      { success: false, error: 'Failed to create user' },
      { status: 500 },
    );
  }

  const user = await getUserByUsername(newUser.data.username);

  if (user) {
    return ExpoResponse.json(
      {
        errors: [{ message: 'username is already taken' }],
      },
      { status: 403 },
    );
  }
}
