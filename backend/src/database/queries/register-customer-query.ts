import cuid from 'cuid'

import { query } from '..'

export async function registerCustomerQuery(
  name: string,
  email: string,
  phone: string,
) {
  const id = cuid()

  const sql = `
    INSERT INTO customers (id, name, email, phone) VALUES ($1, $2, $3, $4) RETURNING *
  `
  const params = [id, name, email, phone]
  const customer = await query(sql, params)

  return customer[0]
}
