import { prisma } from '@/lib/Prisma'
import { User } from '@prisma/client'
import IUserRepository from './IUserRepository'
export interface IUpdate {
  dataAtt: Partial<User>
  filter: string
}
interface IUser {
  id: string
  name: string
  email: string
  password: string
  balance: number
  sentTransactions: []
  receivedTransactions: []
}
export class PrismaUserRepository implements IUserRepository {
  async findByEmail(email: string) {
    const response = await prisma.user.findUnique({
      where: { email },
      include: {
        receivedTransactions: {
          include: {
            sender: {
              select: {
                name: true,
                email: true,
              },
            },
            logs: true,
          },
        },
        sentTransactions: {
          include: {
            receiver: {
              select: {
                name: true,
                email: true,
              },
            },
            logs: true,
          },
        },
      },
    })

    return response as IUser
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

  async transaction(data: { sender: User; receiver: User; amount: number }) {
    const response = await prisma.transaction.create({
      data: {
        amount: data.amount,
        sender: {
          connect: {
            email: data.sender.email,
          },
        },
        receiver: {
          connect: {
            email: data.receiver.email,
          },
        },
      },
      include: {
        logs: { select: { createdAt: true } },
        sender: { include: { sentTransactions: true } },
        receiver: { include: { receivedTransactions: true } },
      },
    })
    return response
  }

  async transactionLog(data: {
    message: string
    transactionId: number
    status: string
  }) {
    return await prisma.transactionLog
      .create({
        data: {
          message: data.message,
          transactionId: data.transactionId,
          status: data.status,
        },
      })
      .then(() => {
        return true
      })
      .catch(() => {
        return false
      })
  }
}
