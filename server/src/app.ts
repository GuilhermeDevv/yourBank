import fastify from 'fastify'
import { appRoutes } from './http/routes'
import cors from '@fastify/cors'

export const app = fastify()
app.register(cors, {
  origin: true,
  credentials: true,
  optionsSuccessStatus: 204,
  methods: ['POST', 'PUT'],
})
app.register(appRoutes)
