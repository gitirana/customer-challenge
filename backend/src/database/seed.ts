import { faker } from '@faker-js/faker'
import { Pool } from 'pg'

const pool = new Pool({
  user: 'docker',
  host: 'localhost',
  database: 'customers-challenge',
  password: 'docker',
  port: 5432,
})

interface CustomerData {
  name: string
  email: string
  phone: string
}

function generateRandomCustomer(): CustomerData {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
  }
}

async function generateRandomCustomers(count: number): Promise<CustomerData[]> {
  const customers: CustomerData[] = []
  for (let i = 0; i < count; i++) {
    customers.push(generateRandomCustomer())
  }
  return customers
}

export async function seedDatabase() {
  const client = await pool.connect()
  const data = await generateRandomCustomers(100)

  for (const seed of data) {
    const sql = `INSERT INTO customers (name, email, phone) VALUES ($1, $2, $3)`
    const params = [seed.name, seed.email, seed.phone]

    await client.query(sql, params)
  }
}

seedDatabase()
  .then(() => {
    console.log('processo feito')
    process.exit(0)
  })
  .catch((error) => {
    console.error('Erro ao executar o seed:', error)
    process.exit(1)
  })
