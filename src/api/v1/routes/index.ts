import express from 'express'
import { orderRoutes } from '../features/order'
import { productRoutes } from '../features/product'

const router = express.Router()

router.use('/api/v1/orders', orderRoutes)
router.use('/api/v1/products', productRoutes)

export default router
