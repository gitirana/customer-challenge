import { query } from '..'

export async function createCustomersTable() {
  const sql = `
    CREATE TABLE IF NOT EXISTS customers (
      id TEXT PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) NOT NULL UNIQUE,
      phone VARCHAR(100) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `

  await query(sql)
}
