import { Sql } from 'postgres';

const testUsers = [
  {
    id: 1,
    userName: 'Vipi',
    firstName: 'Viktor',
    lastName: 'Piwald',
    passwordHash: 'password',
    email: 'vipi@email.com',
  },
  {
    id: 2,
    userName: 'Mawi',
    firstName: 'Max',
    lastName: 'Wimmer',
    passwordHash: 'password',
    email: 'mawi@email.com',
  },
  {
    id: 3,
    userName: 'Claba',
    firstName: 'Claudia',
    lastName: 'Bauer',
    passwordHash: 'password',
    email: 'claba@email.com',
  },
];

export async function up(sql: Sql) {
  for (const testUser of testUsers) {
    await sql`
    INSERT INTO users(username, password_hash, firstname, lastname, email)
    VALUES
    (
      ${testUser.userName},
      ${testUser.passwordHash},
      ${testUser.firstName},
      ${testUser.lastName},
    ${testUser.email}
    )
  `;
  }
}

export async function down(sql: Sql) {
  for (const testUser of testUsers) {
    await sql`
      DELETE FROM users
      WHERE
        id = ${testUser.id}
    `;
  }
}
