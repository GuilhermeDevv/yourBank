interface IUser {
  id: string
  name: string
  email: string
  password: string
  balance: number
  sentTransactions: []
  receivedTransactions: []
}

interface IUserRepository {
  findByEmail(email: string): Promise<IUser | null>
  create(data: { name: string; password: string; email: string }): Promise<void>
  update(data: Partial<IUser>, email: string): Promise<boolean>
  transaction(data: {
    sender: IUser
    receiver: IUser
    amount: number
  }): Promise<{
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
