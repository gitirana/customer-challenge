import { query } from '..'

export async function registerCustomerQuery(
  name: string,
  email: string,
  phone: string,
) {
  const sql = `
    INSERT INTO customers (name, email, phone) VALUES ($1, $2, $3) RETURNING *
  `
  const params = [name, email, phone]
  const customer = await query(sql, params)

  return customer[0]
}
