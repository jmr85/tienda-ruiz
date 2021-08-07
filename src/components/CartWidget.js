import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
    return (
        <div className="img-circle masthead-brand" style={divStyle}>        
            <FaShoppingCart md={12}/>
        </div>
    )
}

const divStyle = {
    marginRight: 20
};

export default CartWidget;