import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
    return (
        <div style={divStyle}>        
            <FaShoppingCart />  
            <label style={labelStyle}>JMRuiz</label>
        </div>
    )
}

const divStyle = {
    marginRight: 20
};

const labelStyle = {
    marginLeft: 20,
}

export default CartWidget;