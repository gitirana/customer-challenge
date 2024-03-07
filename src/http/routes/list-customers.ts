import { z } from 'zod'

import { listCustomersQuery } from '../../database/queries/list-customers-query'
import { app } from '../app'

export async function listCustomers() {
  app.get('/customers', async (request, reply) => {
    const listCustomersHeaderSchema = z.object({
      page: z.coerce.number().default(1).optional(),
      name: z.string().optional(),
      email: z.string().optional(),
      phone: z.string().optional(),
    })
    const { email, name, page, phone } = listCustomersHeaderSchema.parse(
      request.query,
    )

    const customers = await listCustomersQuery({
      page: page || 1,
      name,
      email,
      phone,
    })

    reply.status(200).send(customers)
  })
}
