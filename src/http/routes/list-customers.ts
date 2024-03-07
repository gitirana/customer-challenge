import { listCustomersQuery } from '../../database/queries/list-customers-query'
import { app } from '../app'

export async function listCustomers() {
  app.get('/customers', async () => {
    const customers = await listCustomersQuery()

    return customers
  })
}
