import IUserRepository from '../../repositories/IUserRepository'
import { User } from '@prisma/client'
export class UpdateUserServices {
  constructor(private repository: IUserRepository) {}
  async execute(email: string | undefined, data: Partial<User>) {
    if (!email) {
      return {
        message: 'qual usuário vai alterar os dados(E-mail como de filtro). ',
        status: 400,
      }
    }
    if (data && typeof data.password === 'number') {
      return {
        message: 'dados vazio ou formato errado(number)',
        status: 406,
      }
    }
    const response = await this.repository.update(data, email)
    console.log(response)
    if (response) {
      return { status: 204, message: '' }
    }
    return { status: 404, message: 'usuário nao existe.' }
  }
}
