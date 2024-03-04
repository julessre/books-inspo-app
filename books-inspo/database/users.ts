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
