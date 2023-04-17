import { prisma } from '@/lib/Prisma'
import { User } from '@prisma/client'
import IUserRepository from './IUserRepository'
export interface IUpdate {
  dataAtt: Partial<User>
  filter: string
}
export class PrismaUserRepository implements IUserRepository {
  async findByEmail(email: string) {
    const response = await prisma.user.findUnique({ where: { email } })
    return response
  }

  async create(data: { name: string; password: string; email: string }) {
    await prisma.user.create({ data })
  }

  async update(data: Partial<User>, email: string) {
    const response = await prisma.user.updateMany({
      data,
      where: { email },
    })

    return response.count !== 0
  }
}
