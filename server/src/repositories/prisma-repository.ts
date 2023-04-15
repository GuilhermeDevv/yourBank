import { prisma } from '@/lib/Prisma'
import IUserRepository from './IUserRepository'

export class PrismaUserRepository implements IUserRepository {
  async findByEmail(email: string) {
    const response = await prisma.user.findUnique({ where: { email } })
    return response
  }

  async create(data: { name: string; password: string; email: string }) {
    await prisma.user.create({ data })
  }
}
