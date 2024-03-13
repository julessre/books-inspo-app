import { User } from '../migrations/00000_createTableUsers';
import { sql } from './connect';

export const getUsers = async () => {
  const users = await sql<User[]>`
    SELECT
      *
    FROM
      users
    ORDER BY
      id
  `;

  return users;
};

export async function createUser(
  firstName: string,
  lastName: string,
  userName: string,
  email: string,
  passwordHash: string,
) {
  const [user] = await sql<User[]>`
       INSERT INTO
       users(username, password_hash, firstname, lastname, email)
      VALUES
        (
      ${userName},
      ${passwordHash},
      ${firstName},
      ${lastName},
      ${email}
        )
      RETURNING
        id,
        username
    `;
  return user;
}
