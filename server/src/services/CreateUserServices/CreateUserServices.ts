import IUserRepository from '@/repositories/IUserRepository'
import { z } from 'zod'

export class CreateUserServices {
  constructor(private repository: IUserRepository) {}

  async execute(data: { name: string; password: string; email: string }) {
    const { email, password, name } = data
    const schemaUser = z.object({
      email: z.string().email(),
      password: z.string(),
      name: z.string(),
    })
    const responseValidate = schemaUser.safeParse(data)
    if (!responseValidate.success) {
      return { message: `${responseValidate.error.formErrors}`, status: 400 }
    }
    const response = await this.repository.findByEmail(email)
    if (response) {
      return { message: 'usuário existente ', status: 409 }
    }
    await this.repository.create({ email, password, name })
    return { message: 'usuário criado com sucesso', status: 200 }
  }
}
