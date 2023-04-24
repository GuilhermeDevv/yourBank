import { FastifyInstance } from 'fastify'
import UserControllers from './controllers/UserControllers'
export async function appRoutes(app: FastifyInstance) {
  app.post('/user/login', UserControllers.getUser)
  app.post('/user/register', UserControllers.createUser)
  app.put('/user/update', UserControllers.updateUser)
  app.post('/user/transactions', UserControllers.transactionPix)
}
