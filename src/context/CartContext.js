import { createContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';

export const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  // "items" del hook que se pasa como key es el setItem de localStorage
  const [items, setItems] = useLocalStorage([], "items");

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
  //formato moneda pesos argentinos
  const currencyFormat = x => {
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(x);
  }

  const totalPriceCart = () => {
    let total = 0
    for (const element of items) {
      total += element.item.price * element.quantity
    }
    return total;
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
        totalPriceCart,
        currencyFormat
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
