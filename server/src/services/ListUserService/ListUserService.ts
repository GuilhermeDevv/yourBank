import IUserRepository from 'src/repositories/IUserRepository'
import { User } from '@prisma/client'

export class ListUserService {
  constructor(private repository: IUserRepository) {}
  async execute(data: User) {
    const response = await this.repository.findByEmail(data.email)
    if (response === null) {
      return { message: 'Usuário nao encontrado', status: 404 }
    }
    if (response.email === data.email && response.password === data.password) {
      const {
        email,
        name,
        balance,
        receivedTransactions,
        sentTransactions,
        password,
      } = response
      const userData = {
        email,
        name,
        balance,
        password,
        receivedTransactions,
        sentTransactions,
      }
      return { message: userData, status: 200 }
    }
    return { message: 'Senha invalida', status: 401 }
  }
}
