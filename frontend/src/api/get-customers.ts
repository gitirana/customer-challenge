import { api } from '@/lib/axios'

export interface GetCustomersQuery {
  page?: number | null
  id?: string | null
  name?: string | null
  email?: string | null
  phone?: string | null
}

export interface Customer {
  id: string
  name: string
  email: string
  phone: string
  created_at: string
}

export interface GetCustomersMetadata {
  page: number
  perPage: number
  totalCount: number
}
export interface GetCustomersResponse {
  customers: Customer[]
  meta: GetCustomersMetadata
}

export async function getCustomers({
  id,
  email,
  name,
  page,
  phone,
}: GetCustomersQuery) {
  const response = await api.get<GetCustomersResponse>('/customers', {
    params: {
      id,
      email,
      name,
      page,
      phone,
    },
  })

  return response.data
}
