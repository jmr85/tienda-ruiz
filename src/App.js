import React from "react";
import { CartProvider } from "./context/CartContext";
import RouterApp from "./router/RouterApp";
import "./index.css";

const App = () => { 
  return (
    <div>    
      <CartProvider>
        <RouterApp/> 
      </CartProvider>      
    </div>
  );
};

export default App;