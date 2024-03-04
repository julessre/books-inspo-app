import { Sql } from 'postgres';

const testUsers = [
  { id: 1, firstName: 'Viktor', lastName: 'Piwald', passwordHash: 'password' },
  { id: 2, firstName: 'Max', lastName: 'Wimmer', passwordHash: 'password' },
  { id: 3, firstName: 'Claudia', lastName: 'Bauer', passwordHash: 'password' },
];

export async function up(sql: Sql) {
  for (const testUser of testUsers) {
    await sql`
    INSERT INTO users(firstname, lastname, password_hash)
    VALUES
    (
      ${testUser.firstName},
      ${testUser.lastName},
      ${testUser.passwordHash}
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
