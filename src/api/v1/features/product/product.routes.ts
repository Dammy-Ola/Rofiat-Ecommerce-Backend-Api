import express from 'express'
import {
  addProductHandler,
  deleteProductHandler,
  editProductHandler,
  getProductsHandler,
  getSingleProductHandler,
} from './product.controllers'

const router = express.Router()

router.route('/').get(getProductsHandler).post(addProductHandler)
router.route('/:slug').get(getSingleProductHandler)
router.route('/:id').patch(editProductHandler).delete(deleteProductHandler)

export default router
