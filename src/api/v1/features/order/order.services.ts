import { Order, IOrder, IBaseOrder } from './index'

export const getOrders = () => {
  return Order.find()
}

export const getSingleOrderById = (orderId: IOrder['_id']) => {
  return Order.findById(orderId)
}

export const getSingleOrderByOrderNumber = (
  orderNumber: IBaseOrder['orderNumber']
) => {
  return Order.find({ orderNumber })
}

export const makeOrder = (order: IBaseOrder) => {
  return Order.create(order)
}

export const editOrder = (orderId: IOrder['_id'], order: IBaseOrder) => {
  return Order.findByIdAndUpdate(orderId, Order, {
    new: true,
    runValidators: true,
  })
}

export const deleteOrder = (orderId: IOrder['_id']) => {
  return Order.findByIdAndDelete(orderId)
}
