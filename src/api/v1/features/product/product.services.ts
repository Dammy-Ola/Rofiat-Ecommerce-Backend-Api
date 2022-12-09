import { Product, IProduct, IBaseProduct } from './index'

export const getProducts = () => {
  return Product.find()
}

export const getSingleProductById = (productId: IProduct['_id']) => {
  return Product.findById(productId)
}

export const getSingleProductBySlugName = (
  productSlug: IBaseProduct['slug']
) => {
  return Product.findById(productSlug)
}

export const addProduct = (product: IBaseProduct) => {
  return Product.create(product)
}

export const editProduct = (
  productId: IProduct['_id'],
  product: IBaseProduct
) => {
  return Product.findByIdAndUpdate(productId, product, {
    new: true,
    runValidators: true,
  })
}

export const deleteProduct = (productId: IProduct['_id']) => {
  return Product.findByIdAndDelete(productId)
}
