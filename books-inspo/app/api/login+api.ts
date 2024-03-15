import { ExpoResponse } from 'expo-router/server';
import { z } from 'zod';

type User = {
  email: string;
  passwordHash: string;
};

export const loginSchema = z.object({
  email: z.string().min(5),
  password: z.string().min(3),
});

export async function POST(request: Request) {
  const userData: User = await request.json();
  const validatedLogin = loginSchema.safeParse(userData);
  console.log(userData);

  if (!validatedLogin.success) {
    return ExpoResponse.json(
      { errors: 'Email or password invalid' },
      {
        status: 400,
      },
    );
  }
}
