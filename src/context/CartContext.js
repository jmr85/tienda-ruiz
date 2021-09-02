import { createContext, useState } from 'react'

export const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([])

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setItems([...items, { item: item, quantity: quantity }])
      console.log('items de CartContext dentro de IF: ', items)
    }
    console.log('items de CartContext: ', items)
  }

  const isInCart = id => {
    return items.some(element => element.item.id === id)
  }

  const removeItem = id => {
    let itemAux = [...items]
    itemAux = itemAux.filter(element => element.item.id !== id)
    console.log('Remove item:', itemAux)
    setItems(itemAux)
  }

  const clearAllItems = () => setItems([])

  const countItemQuantity = () => {
    let count = 0
    for (const iterator of items) {
      count += iterator.quantity
    }
    return count
  }

  const totalPriceCart = () => {
    let total = 0
    for (const element of items) {
      total += element.item.price * element.quantity
    }
    return total
  }

  return (
    <CartContext.Provider
      value={{
        items,
        setItems,
        addItem,
        removeItem,
        clearAllItems,
        countItemQuantity,
        totalPriceCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
