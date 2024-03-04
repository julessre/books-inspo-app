import { Sql } from 'postgres';

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  passwordHash: string;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE users (
      id integer PRIMARY key generated always AS identity,
      firstname varchar(50) NOT NULL,
      lastname varchar(50) NOT NULL,
      password_hash varchar(60) NOT NULL
    )
  `;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE users `;
}
