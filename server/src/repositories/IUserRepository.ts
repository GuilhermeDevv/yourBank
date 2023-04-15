import { User } from '@prisma/client'

interface IUserRepository {
  findByEmail(email: string): Promise<User | null>
  create(data: { name: string; password: string; email: string }): Promise<void>
}
export default IUserRepository
