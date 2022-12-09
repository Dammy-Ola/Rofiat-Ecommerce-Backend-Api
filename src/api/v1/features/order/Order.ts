import { Schema, model } from 'mongoose'
import { IBaseOrder } from './index'

const OrderSchema = new Schema<IBaseOrder>(
  {
    orderNumber: {
      type: Number,
      unique: true,
      required: [true, 'The order number is required'],
    },
    productItems: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
          required: [true, 'The product is required'],
        },
        qty: {
          type: Number,
          default: 1,
          required: [true, 'The quantity of the product is required'],
        },
        subTotal: {
          type: Number,
          required: [true, 'The subtotal of the product is required'],
        },
      },
    ],
    total: {
      type: Number,
      unique: true,
      required: [true, 'The total of the product is required'],
    },
    status: {
      type: String,
      default: 'Pending',
      enum: {
        values: ['Pending', 'Fulfilled', 'Cancelled'],
        message: '{VALUE} is not supported',
      },
      required: [true, 'Thw status of the order is required'],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
)

const Order = model<IBaseOrder>('Order', OrderSchema)

export default Order
