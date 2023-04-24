import IUserRepository from '@/repositories/IUserRepository'
import { User } from '@prisma/client'

export class ListUserService {
  constructor(private repository: IUserRepository) {}
  async execute(data: User) {
    const response = await this.repository.findByEmail(data.email)
    if (response === null) {
      return { message: 'erro, usuário nao encontrado.', status: 404 }
    }
    if (response.email === data.email && response.password === data.password) {
      return { message: '', status: 204 }
    }
    return { message: 'Senha invalida!', status: 401 }
  }
}
