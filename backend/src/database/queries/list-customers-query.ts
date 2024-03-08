import { query } from '..'

interface listCustomersFilters {
  id?: string
  page: number
  name?: string
  email?: string
  phone?: string
}

export async function listCustomersQuery({
  id,
  page,
  email,
  name,
  phone,
}: listCustomersFilters) {
  const limit = 10
  const offset = (page - 1) * limit
  const pageNumber = page ? parseInt(page.toString(), 10) : 1

  if (isNaN(pageNumber)) {
    return
  }

  let sql = `
    SELECT * FROM customers WHERE 1 = 1
  `

  const conditions = []

  if (id) {
    conditions.push(`id ILIKE '%${id}%'`)
  }
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

  let countSql = 'SELECT COUNT(*) as totalCount FROM customers'

  if (conditions.length > 0) {
    countSql += ' WHERE ' + conditions.join(' AND ')
  }

  sql += ' ORDER BY created_at DESC'
  sql += ` LIMIT ${limit} OFFSET ${offset}`

  const [customers, totalCount] = await Promise.all([
    query(sql),
    query(countSql),
  ])

  return { customers, totalCount: totalCount[0].totalcount }
}
