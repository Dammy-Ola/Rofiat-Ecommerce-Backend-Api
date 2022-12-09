import { Types } from 'mongoose'
import { IProduct } from '../product'

export interface IBaseOrder {
  orderNumber: number
  productItems: {
    product: IProduct
    qty: number | 1
    subTotal: number | 0
  }[]
  status: 'Pending' | 'Fulfilled' | 'Cancelled'
  total: number | 0
}

export default interface IOrder extends IBaseOrder {
  _id: Types.ObjectId
}
