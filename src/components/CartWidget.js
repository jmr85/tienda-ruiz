import React, {useContext} from "react";
import { CartContext } from "../context/CartContext";
import { Button, Badge } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const CartWidget = () => {
    const {items, countItemQuantity} = useContext(CartContext);
    return (
        <> 
            {
                items.length === 0
                ?
                <></>
                :  
                <NavLink to ="/cart">        
                    <Button variant="light">
                        <img src="/shoppingcart.png" alt="Cart" width="12" height="10"/>
                        <Badge pill bg="danger">
                            {countItemQuantity()}
                        </Badge>
                    </Button>
                </NavLink>
            }
            
        </>
    )
}

export default CartWidget;