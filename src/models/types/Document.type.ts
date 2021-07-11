import { Document } from "mongoose"

export interface DTest extends Document {
  name: string,
  age: number,
  createdAt: Date,
  updatedAt: Date,
}
