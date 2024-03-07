import { FastifyInstance } from 'fastify'
import { z } from 'zod'

import { registerCustomerQuery } from '../../database/queries/register-customer-query'

export async function registerCustomer(app: FastifyInstance) {
  app.post('/customers', async (request, reply) => {
    const registerCustomerBodySchema = z.object({
      name: z.string(),
      email: z.string(),
      phone: z.string(),
    })

    const { email, name, phone } = registerCustomerBodySchema.parse(
      request.body,
    )

    await registerCustomerQuery(name, email, phone)

    return reply.status(201).send()
  })
}
