import { Schema, model } from 'mongoose'
import { IBaseProduct } from './product.interfaces'

const ProductSchema = new Schema<IBaseProduct>(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'The name of the product is required'],
    },
    slug: {
      type: String,
      trim: true,
      required: [true, 'The slug of the product is required'],
      unique: true,
    },
    price: {
      type: Number,
      default: 0,
      required: [true, 'The surname of the product is required'],
    },
    description: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
)

const Product = model<IBaseProduct>('Product', ProductSchema)

export default Product
