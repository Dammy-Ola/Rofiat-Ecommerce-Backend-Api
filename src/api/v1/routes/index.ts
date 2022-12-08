import express from 'express'
const router = express.Router()

import { productRoutes } from '../features/product'

router.use('/api/v1/products', productRoutes)

export default router
