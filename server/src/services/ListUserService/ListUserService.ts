import IUserRepository from '@/repositories/IUserRepository'

export class ListUserService {
  constructor(private repository: IUserRepository) {}
  async execute(email: string) {
    const response = await this.repository.findByEmail(email)
    if (response === null) {
      return { message: 'erro, usuário nao encontrado.', status: 404 }
    }
    return { message: response, status: 200 }
  }
}
