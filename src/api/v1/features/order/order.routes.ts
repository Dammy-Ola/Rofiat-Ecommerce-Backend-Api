import express from 'express'
import {
  deleteOrderHandler,
  editOrderHandler,
  getOrdersHandler,
  getSingleOrderByOrderNumberHandler,
  makeOrderHandler,
} from './index'

const router = express.Router()

router.route('/').get(getOrdersHandler).post(makeOrderHandler)
router.route('/:orderNumber').get(getSingleOrderByOrderNumberHandler)
router.route('/:id').patch(editOrderHandler).delete(deleteOrderHandler)

export default router
