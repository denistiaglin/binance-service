import {Router, Request, Response} from 'express'
import controller from "../controller"

const router = Router()

router.get(
  '/',
  async (req: Request, res: Response) => {
    try {
      const test = ''

      res.json(test)
    } catch (e) {
      res.json('bad get')
    }
  },
)

router.post(
  '/',
  async (req: Request, res: Response) => {
    try {
      const test = ''


      res.json(test)
    } catch (e) {
      res.json('bad')
    }
  },
)

export default router
