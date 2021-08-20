import React, {useState} from 'react';
import { Button, Badge } from 'react-bootstrap';
import { useHistory, Link } from "react-router-dom";
import ItemCount from './ItemCount';
import Swal from 'sweetalert2';

const ItemDetail = ({title, price, pictureUrl, description, stock}) => {

    const [hideItemCount, setHideItemCount] = useState(false);

    let history = useHistory();
    const handleOnclick = () => {
            history.goBack();
    }

    const onAdd = (stockValue) => {
        stockValue === 1 ? 
        Swal.fire({title:'Bien!', text: `Has agregado  ${stockValue} producto al carrito`, icon: 'success', confirmButtonColor: 'green'}): 
        Swal.fire('Bien!', `Has agregado  ${stockValue} productos al carrito`,'success');
        setHideItemCount(true);
        
    }

    return (
            <div class="container-fluid">
                <Button className="btn btn-primary btn-sm" onClick={handleOnclick}>Atras</Button>
                <div class="row" className="animate__animated animate__fadeIn">
                     <div class="col-md-12">
                        <div class="row">
                            <div class="col-md-7">
                                    <h3 nameClass="text-center"> {title} </h3>
                                    <dl>
                                        <dt>
                                            <Badge pill bg="success">
                                                <h4>${price}</h4>
                                            </Badge>{' '}                                     
                                        </dt>
                                        <br/>
                                        <dd>
                                            <img variant="top" src={pictureUrl} width="500" height="432" alt={title} />
                                        </dd>
                                        <dt>
                                            Descripcion
                                        </dt>
                                    <dd>
                                        {description}
                                    </dd>
                                </dl>
                            </div>
                            <div class="col-md-5">                                            
                                { 
                                    !hideItemCount 
                                    ? 
                                        <ItemCount stock={stock} initial={1} onAdd={onAdd} />
                                    : 
                                        <Link to="/cart"><Button variant="success" size="lg" >Terminar compra</Button></Link> 
                                }                                   
                            </div>                           
                        </div>
                    </div>
                </div>
            </div>       
    )
}

export default ItemDetail;
