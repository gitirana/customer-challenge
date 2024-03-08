import { z } from 'zod'

import { listCustomersQuery } from '../../database/queries/list-customers-query'
import { app } from '../app'

export async function listCustomers() {
  app.get('/customers', async (request, reply) => {
    const listCustomersHeaderSchema = z.object({
      page: z.coerce.number().default(1).optional(),
      id: z.string().optional(),
      name: z.string().optional(),
      email: z.string().optional(),
      phone: z.string().optional(),
    })
    const { email, name, page, phone, id } = listCustomersHeaderSchema.parse(
      request.query,
    )

    const result = await listCustomersQuery({
      page: page || 1,
      id,
      name,
      email,
      phone,
    })

    const limit = 10

    const meta = {
      page: page || 1,
      perPage: limit,
      totalCount: parseInt(result?.totalCount, 10),
    }

    reply.status(200).send({
      customers: result?.customers,
      meta,
    })
  })
}
