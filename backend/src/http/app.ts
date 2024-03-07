import cors from '@fastify/cors'
import fastify from 'fastify'

import { listCustomers } from './routes/list-customers'
import { registerCustomer } from './routes/register-customer'

export const app = fastify()

app.register(cors, {
  origin: true,
})

app.register(registerCustomer)
app.register(listCustomers)
