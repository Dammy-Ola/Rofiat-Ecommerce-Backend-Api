import express from 'express'
import {
  addProductHandler,
  deleteProductHandler,
  editProductHandler,
  getProductsHandler,
  getSingleProductHandler,
} from './index'

const router = express.Router()

router.route('/').get(getProductsHandler).post(addProductHandler)
router.route('/:slug').get(getSingleProductHandler)
router.route('/:id').patch(editProductHandler).delete(deleteProductHandler)

export default router
