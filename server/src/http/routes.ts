import { FastifyInstance } from 'fastify'
import UserControllers from './controllers/UserControllers'
export async function appRoutes(app: FastifyInstance) {
  app.get('/users/:email', UserControllers.getUser)
  app.post('/users', UserControllers.createUser)
  app.put('/users', UserControllers.updateUser)
}
