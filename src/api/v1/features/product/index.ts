/**
 * Prduct Model import
 */
import Product from './Product'

/**
 * Product Interfaces import
 */
import IProduct, { IBaseProduct } from './product.interfaces'

/**
 * Product Services import
 */
import {
  addProduct,
  deleteProduct,
  editProduct,
  getProducts,
  getSingleProductById,
  getSingleProductBySlugName,
} from './product.services'

/**
 * Product Controllers import
 */
import {
  addProductHandler,
  deleteProductHandler,
  editProductHandler,
  getProductsHandler,
  getSingleProductHandler,
} from './product.controllers'

/**
 * Product routes import
 */
import productRoutes from './product.routes'

/**
 * Exporting Product imports
 */

export {
  Product,
  IProduct,
  IBaseProduct,
  addProduct,
  deleteProduct,
  editProduct,
  getProducts,
  getSingleProductBySlugName,
  getSingleProductById,
  addProductHandler,
  deleteProductHandler,
  editProductHandler,
  getProductsHandler,
  getSingleProductHandler,
  productRoutes,
}
