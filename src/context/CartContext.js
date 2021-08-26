import {createContext, useState} from 'react';

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  
    const [items, setItems] = useState([]);

    const addItem = (item, quantity) => {
      if(!isInCart(item.id)){ 
        setItems([...items, {item: item, quantity: quantity}]);
        console.log("items de CartContext dentro de IF: ", items);   
      }
      console.log("items de CartContext: ", items);
    };

    const isInCart = (id) => {
      return items.some(element => element.item.id === id);
    }

    const removeItem = (id) => {
        let itemAux = [...items];
        itemAux = itemAux.filter(element => element.item.id !== id);
        console.log('Remove item:', itemAux);
        setItems(itemAux);
    };
    
    const clearAllItems = () => setItems([]);

    
    // const totalFile = (item, quantity) => {
    //   return item * quantity;
    // }; 

    // const totalItemsCart = (total) => {
    //   let suma = 0;
    //   suma = total.reduce((a, b) => a + b);
    //   return suma;
    // }; 
    
    return (
      <CartContext.Provider value={{ items, setItems, addItem, removeItem, clearAllItems }}>
        {children}
      </CartContext.Provider>
    );
  };