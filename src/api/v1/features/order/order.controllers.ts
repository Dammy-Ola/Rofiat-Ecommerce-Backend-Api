import { NextFunction, Request, Response } from 'express'
import {
  IOrder,
  IBaseOrder,
  deleteOrder,
  editOrder,
  getOrders,
  getSingleOrderByOrderNumber,
  makeOrder,
} from './index'

export const getOrdersHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const orders = await getOrders()

    res.status(200).json({ success: true, count: orders.length, orders })
  } catch (error) {
    res.status(500).json({ error })
  }
}

export const getSingleOrderByOrderNumberHandler = async (
  req: Request<{ orderNumber: IBaseOrder['orderNumber'] }, {}, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const order = await getSingleOrderByOrderNumber(req.params.orderNumber)

    res.status(200).json({ success: true, order })
  } catch (error) {
    res.status(500).json({ error })
  }
}

export const makeOrderHandler = async (
  req: Request<{}, {}, IBaseOrder, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const Order = await makeOrder(req.body)

    res.status(201).json({ success: true, Order })
  } catch (error) {
    res.status(500).json({ error })
  }
}

export const editOrderHandler = async (
  req: Request<{ id: IOrder['_id'] }, {}, IBaseOrder, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const order = await editOrder(req.params.id, req.body)

    res.status(200).json({ success: true, order })
  } catch (error) {
    res.status(500).json({ error })
  }
}

export const deleteOrderHandler = async (
  req: Request<{ id: IOrder['_id'] }, {}, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const order = await deleteOrder(req.params.id)

    res.status(200).json({ success: true, order })
  } catch (error) {
    res.status(500).json({ error })
  }
}
