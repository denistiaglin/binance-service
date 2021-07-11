import { Schema, model } from 'mongoose'
import { autoIncrement } from '../../lib/database/hooks/autoIncrement'
import { DTest } from "../types/Document.type"
import { MTest } from "../types/Model.type"

const ConsumerSchema = new Schema<DTest>({
  id: { type: Number, required: true, unique: true, default: Date.now()+Math.random().toFixed(5) },
  name: { type: String, required: true },
  age: { type: Number, required: true },
}, {
  timestamps: true,
  id: false,
})

ConsumerSchema.pre('save',async function (next: any) {
  await autoIncrement(this, 'Consumer', 'id', next)
})

const Consumer = model<DTest, MTest>('Consumer', ConsumerSchema)

export default Consumer
