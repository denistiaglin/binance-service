import { Document, Model, model, Schema } from "mongoose"

interface idEntityCountersDoc extends Document {
  modelName: string,
  count: number,
}

type idEntityCountersModelInterface = Model<idEntityCountersDoc>

const idEntityCountersSchema = new Schema({
  count: { type: Number, default: 0 },
  modelName: { type: String, required: true, unique: true },
})

const idEntityCounters = model<idEntityCountersDoc, idEntityCountersModelInterface>(
  'idEntityCounters ',
  idEntityCountersSchema,
)

export default idEntityCounters
