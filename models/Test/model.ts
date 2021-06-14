import { Schema, Document, Model, model } from 'mongoose'

interface ITest {
    name: string;
    age: number;
}

interface testDoc extends Document {
    name: string;
    age: number;
    createAt: Date,
    updateAt: Date,
}

interface testModelInterface extends Model<testDoc> {
    build(attr: ITest): testDoc
}

const testSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    createAt: { type: Date, required: true },
    updateAt: { type: Date, required: true },
})

testSchema.statics.build = (attr: ITest) => {
    return new Test({
        ...attr,
        createAt: new Date(),
        updateAt: new Date(),
    })
}

const Test = model<testDoc, testModelInterface>('test', testSchema)


export default Test