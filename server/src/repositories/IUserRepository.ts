import { User } from '@prisma/client'
interface IUserRepository {
  findByEmail(email: string): Promise<User | null>
  create(data: { name: string; password: string; email: string }): Promise<void>
  update(data: Partial<User>, email: string): Promise<boolean>
  transaction(data: { sender: User; receiver: User; amount: number }): Promise<{
    id: number
    senderId: string
    receiverId: string
    amount: number
  }>
  transactionLog(data: {
    message: string
    transactionId: number
    status: string
  }): Promise<boolean>
}
export default IUserRepository
