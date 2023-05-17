import fastify from 'fastify'
import { appRoutes } from './http/routes'
import cors from '@fastify/cors'

export const app = fastify({ requestTimeout: 5000 })
app.register(cors)
app.register(appRoutes)
