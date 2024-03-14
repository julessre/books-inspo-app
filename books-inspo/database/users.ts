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

export const createUser = async (
  userName: string,
  passwordHash: string,
  firstName: string,
  lastName: string,
  email: string,
) => {
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
};

export const getUserByUsername = async (username: string) => {
  const [user] = await sql<User[]>`
    SELECT
      id,
      username
    FROM
      users
    WHERE
      username = ${username.toLowerCase()}
  `;
  return user;
};
