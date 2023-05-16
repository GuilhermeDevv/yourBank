import { FastifyInstance } from 'fastify'
import UserControllers from './controllers/UserControllers'
function addCorsHeaders(req, res, done) {
  res.header('Access-Control-Allow-Origin', 'https://your-bank-site.vercel.app')
  res.header('Access-Control-Allow-Methods', 'PUT')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  done()
}
export async function appRoutes(app: FastifyInstance) {
  app.post('/user/login', UserControllers.getUser)
  app.post('/user/register', UserControllers.createUser)
  app.put(
    '/user/update',
    { preHandler: addCorsHeaders },
    UserControllers.updateUser,
  )
  app.post('/user/transactions', UserControllers.transactionPix)
}
