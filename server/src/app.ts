import fastify from 'fastify'
import { appRoutes } from './http/routes'
import cors from '@fastify/cors'

export const app = fastify()
app.register(cors, {
  origin: 'https://your-bank-site.vercel.app',
  methods: ['GET', 'PUT', 'POST'],
  allowedHeaders: ['Content-Type'],
})
app.register(appRoutes)
