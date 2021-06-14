import {Router, Request, Response} from 'express'
import { Test } from "../../../models";

const router = Router()

router.get(
    '/',
    async (req: Request, res: Response) => {
        try {
            const test = Test.build({
                name: 'bulhi',
                age: Date.now(),
            })
            res.json(test)
        } catch (e) {
            console.log(e)
            res.json('bad')
        }
    })

export default router