import fastify from 'fastify'
import { appRoutes } from './http/routes'
import cors from '@fastify/cors'

export const app = fastify()
app.register(cors, {
  origin: ['http://localhost:5173', 'https://your-bank-site.vercel.app'], // Permitir solicitações CORS somente deste domínio
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
})
app.register(appRoutes)
