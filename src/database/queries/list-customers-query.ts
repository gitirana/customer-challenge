import { query } from '..'

interface listCustomersFilters {
  page: number
  name?: string
  email?: string
  phone?: string
}

export async function listCustomersQuery({
  page,
  email,
  name,
  phone,
}: listCustomersFilters) {
  const limit = 1
  const offset = (page - 1) * limit
  const pageNumber = page ? parseInt(page.toString(), 10) : 1

  if (isNaN(pageNumber)) {
    return
  }

  let sql = `
    SELECT * FROM customers WHERE 1 = 1
  `

  const conditions = []

  if (name) {
    conditions.push(`name ILIKE '%${name}%'`)
  }
  if (email) {
    conditions.push(`email ILIKE '%${email}%'`)
  }
  if (phone) {
    conditions.push(`phone ILIKE '%${phone}%'`)
  }
  if (conditions.length > 0) {
    sql += ' AND ' + conditions.join(' AND ')
  }

  sql += ' ORDER BY created_at DESC'
  sql += ` LIMIT ${limit} OFFSET ${offset}`

  const customers = await query(sql)

  return customers
}
