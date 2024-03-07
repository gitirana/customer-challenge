import { Pool } from 'pg'

import { createCustomersTable } from './queries/create-customers-table'

export const pool = new Pool({
  user: 'docker',
  host: 'localhost',
  database: 'customers-challenge',
  password: 'docker',
  port: 5432,
})

export async function query(sql: string, params?: unknown[]) {
  const client = await pool.connect()
  try {
    const result = await client.query(sql, params)
    return result.rows
  } finally {
    client.release()
  }
}

export async function main() {
  try {
    await createCustomersTable()
  } catch (error) {
    console.error('Erro ao executar consulta:', error)
  }
}
