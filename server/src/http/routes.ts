import { FastifyInstance } from 'fastify'
import UserControllers from './controllers/UserControllers'
export async function appRoutes(app: FastifyInstance) {
  app.get('/user/:email', UserControllers.getUser)
  app.post('/user', UserControllers.createUser)
  app.put('/user', UserControllers.updateUser)
  app.post('/user/transactions', UserControllers.transactionPix)
}
