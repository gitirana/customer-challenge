import { api } from '@/lib/axios'

export interface RegisterCustomerBody {
  name: string
  email: string
  phone: string
}

export async function registerCustomer({
  email,
  name,
  phone,
}: RegisterCustomerBody) {
  await api.post('/customers', {
    email,
    name,
    phone,
  })
}
