import { createService } from '@/api/server'

export const loginUser = data => {
  return createService({
    url: '/login',
    method: 'post',
    data
  })
}
