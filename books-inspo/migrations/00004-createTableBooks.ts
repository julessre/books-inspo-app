import { Sql } from 'postgres';

export type Books = {
  id: number;
  bookTitle: string;
  author: string;
  publishingDate: number;
  description: string;
  pages: number;
  cover: string;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE books (
      id integer PRIMARY key generated always AS identity,
      book_title varchar(100) NOT NULL,
      author varchar(100) NOT NULL,
      publishing_date integer,
      description varchar(200) NOT NULL,
      pages integer,
      cover varchar(300),
    )
  `;
}

export async function down(sql: Sql) {
  await sql`
      DROP TABLE books
    `;
}
