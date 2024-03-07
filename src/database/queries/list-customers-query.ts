import { query } from '..'

export async function listCustomersQuery() {
  const sql = `
    SELECT * FROM customers 
  `
  const customers = await query(sql)

  return customers
}
