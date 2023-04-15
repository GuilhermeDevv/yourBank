import { FastifyReply, FastifyRequest } from 'fastify'
import { User } from '@prisma/client'

import { PrismaUserRepository } from '@/repositories/prisma-repository'
import { ListUserService } from '@/services/ListUserService/ListUserService'
import { CreateUserServices } from '@/services/CreateUserServices/CreateUserServices'
class UserController {
  async getUser(request: FastifyRequest, reply: FastifyReply) {
    const { email } = <User>request.params
    const repository = new PrismaUserRepository()
    const listUserService = new ListUserService(repository)
    const { message, status } = await listUserService.execute(email)
    reply.status(status).send(message)
  }

  async createUser(request: FastifyRequest, reply: FastifyReply) {
    const data = <User>request.body
    const repository = new PrismaUserRepository()
    const createUser = new CreateUserServices(repository)
    const { message, status } = await createUser.execute(data)
    return reply.send(message).status(status)
  }
}

export default new UserController()
