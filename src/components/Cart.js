import React, { useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { Badge, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import NumberFormat from 'react-number-format';

const Cart = () => {
    
    const {items,setItems,removeItem, clearAllItems} = useContext(CartContext);
    let acumuladorTotal = 0;
    
    useEffect(() => {
        setItems(items);
        console.log("items de Cart.js Component: ", items);
    },[items, setItems]);
       
    if(items.length !== 0){
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="text-center">
                            Cart
                        </h3> 
                        
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>
                                        Producto
                                    </th>
                                    <th>
                                        Cantidad
                                    </th>
                                    <th>
                                        Precio
                                    </th>
                                    <th>
                                        Total
                                    </th>
                                    <th>
                                        Total acumulado
                                    </th>
                                    <th>
                                        
                                    </th>

                                </tr>
                            </thead>
                        
                                    <tbody>
                                    { 
                                        items.map( (element, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <img width="120" height="130" src={element.item.pictureUrl}
                                                        alt={element.item.title}
                                                    />
                                                    {element.item.title}
                                                </td>
                                                <td>
                                                    {element.quantity}
                                                </td>
                                                <td>
                                                    <NumberFormat
                                                        value={element.item.price}                                                  
                                                        displayType={'text'}
                                                        thousandSeparator={true}
                                                        prefix={'$'} 
                                                    />
                                                </td>
                                                <td>
                                                    <NumberFormat
                                                        value={element.item.price * element.quantity}
                                                        displayType={'text'}
                                                        thousandSeparator={true}
                                                        prefix={'$'} 
                                                    />                                                                                      
                                                </td>
                                                <td>
                                                    ${acumuladorTotal += element.item.price * element.quantity}
                                                </td>
                                                <td>
                                                    <button type="button" onClick={() => removeItem(element.item.id)} className="btn btn-danger" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </td>                                                                                   
                                            </tr>

                                        ))
                                    }  
                                        <tr className="table-active">
                                                <td>
                                                    <h2>
                                                        <Badge bg="success">
                                                            Total: 
                                                            <NumberFormat
                                                                value={acumuladorTotal}
                                                                displayType={'text'}
                                                                thousandSeparator={true}
                                                                prefix={'$'} 
                                                            />  
                                                        </Badge>
                                                    </h2>
                                                </td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                                                                                                                                        
                                        </tr>  
                                    </tbody>
                                            
                        </table>
                        <button type="button" onClick={ () => clearAllItems()} className="btn btn-primary btn-lg">
                            Vaciar Carrito
                        </button>
                    </div>
                </div>
            </div>
        )
    }else{
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="text-center cart__placeholder-title">
                            Tu carrito está vacío
                        </h3>
                        <p className="cart__placeholder-subtitle">
                            ¿No sabés qué comprar? ¡Miles de productos te esperan!
                        </p>
                        <NavLink to ="/">  
                            <div className="d-grid gap-2">
                                <Button variant="secondary" size="lg">
                                    Volver al listado
                                </Button>
                            </div>                                         
                         </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;