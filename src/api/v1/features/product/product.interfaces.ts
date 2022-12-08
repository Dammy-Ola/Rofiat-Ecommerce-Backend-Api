import { Types } from 'mongoose'

export interface IBaseProduct {
  name: string
  slug: string
  price: number | 0
  description?: string | undefined
}

export default interface IProduct extends IBaseProduct {
  _id: Types.ObjectId
}
