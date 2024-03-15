import { ExpoResponse } from 'expo-router/server';
import { createUser, getUserByEmail } from '../../database/users';

type User = {
  id: number;
  email: string;
  passwordHash: string;
  firstName: string;
  lastName: string;
};

export async function POST(request: Request) {
  const userData: User = await request.json();
  const { email, passwordHash, firstName, lastName } = userData;

  const newUser = await createUser(email, passwordHash, firstName, lastName);
  console.log(newUser);
  if (!newUser) {
    //   return ExpoResponse.json({ success: true, user: newUser });
    // } else {
    return ExpoResponse.json(
      { success: false, error: 'Failed to create user' },
      { status: 500 },
    );
  }

  const user = await getUserByEmail(newUser.email);

  if (user) {
    return ExpoResponse.json(
      {
        errors: [{ message: 'username is already taken' }],
      },
      { status: 403 },
    );
  }
}
