/**
 * Order Model import
 */
import Order from './Order'

/**
 * Order Interfaces import
 */
import IOrder, { IBaseOrder } from './order.interfaces'

/**
 * Order Services import
 */
import {
  deleteOrder,
  editOrder,
  getOrders,
  getSingleOrderById,
  getSingleOrderByOrderNumber,
  makeOrder,
} from './order.services'

/**
 * Order Controllers import
 */
import {
  deleteOrderHandler,
  editOrderHandler,
  getOrdersHandler,
  getSingleOrderByOrderNumberHandler,
  makeOrderHandler,
} from './order.controllers'

/**
 * Product routes import
 */
import orderRoutes from './order.routes'

/**
 * Exporting Order imports
 */

export {
  Order,
  IOrder,
  IBaseOrder,
  deleteOrder,
  editOrder,
  getOrders,
  getSingleOrderById,
  getSingleOrderByOrderNumber,
  makeOrder,
  deleteOrderHandler,
  editOrderHandler,
  getOrdersHandler,
  getSingleOrderByOrderNumberHandler,
  makeOrderHandler,
  orderRoutes,
}
