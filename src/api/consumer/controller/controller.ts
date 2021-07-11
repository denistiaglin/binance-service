import Test from "../../../models/Test"

const findAll = async () => {
  return await Test.find().lean()
}

export default {
  findAll,
}
