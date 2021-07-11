import idEntityCounters from "../../../models/IdEntityCounters/IdEntityCounters"

export const autoIncrement = async (
  doc: Record<string, any>,
  modelName: string,
  field: string,
  next: () => any,
): Promise<void> => {
  let counter
  counter = await idEntityCounters.findOne({ modelName })
  if (counter) {
    await counter.updateOne({ $inc: { count: 1 } })
    counter = await idEntityCounters.findOne({ modelName })
  }
  if (!counter) {
    counter = new idEntityCounters({
      modelName,
      count: 1,
    })
    await counter.save()
  }
  doc[field] = counter.count
  next()
}
