import { Books } from '../migrations/00004-createTableBooks';
import { sql } from './connect';

export const getBooks = async () => {
  const books = await sql<Books[]>`
    SELECT
      *
    FROM
      books
    -- ORDER BY
    --   id
    WHERE
      id in (43, 44, 49)
        `;

  return books;
};
