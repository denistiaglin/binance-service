import { NextFunction } from "express"

const Authorization = (req: Request, res: Response, next: NextFunction) => {

  next()
}

export default Authorization
