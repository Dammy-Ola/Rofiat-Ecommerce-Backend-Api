const generateOrderNumber = (): number => {
  const orderNumber = Math.floor(Math.random() * 10000)
  return orderNumber
}

export default generateOrderNumber
