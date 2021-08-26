import React, { useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { Badge } from 'react-bootstrap';

const Cart = () => {
    
    const {items,setItems,removeItem, clearAllItems} = useContext(CartContext);
    let acumuladorTotal = 0;
    
    useEffect(() => {
        setItems(items);
        console.log("items de Cart.js Component: ", items);
    },[items, setItems]);

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
                                                {element.item.title}
                                            </td>
                                            <td>
                                                {element.quantity}
                                            </td>
                                            <td>
                                                {element.item.price}
                                            </td>
                                            <td>
                                                {element.item.price * element.quantity}                                                                                       
                                            </td>
                                            <td>
                                                {acumuladorTotal += element.item.price * element.quantity}
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
                                            Total: 
                                        </td>
                                        <Badge pill bg="success">
                                                <h4>${acumuladorTotal}</h4>
                                        </Badge>{' '}                                                                                       
                                            
                                        
                                      
                                    </tr>  
                                </tbody>
                                         
                    </table>
                    <button type="button" onClick={clearAllItems} className="btn btn-primary btn-lg">
				        Vaciar Carrito
			        </button>
                </div>
            </div>
        </div>
    )
}

export default Cart;