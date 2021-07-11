import { Router } from 'express'

import consumerRouter from './consumer/router'

const router = Router()

router.use('/consumer', consumerRouter)

export default router
