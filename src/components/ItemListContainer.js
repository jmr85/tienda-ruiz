import React, {useState, useEffect} from "react";
import { Spinner } from 'react-bootstrap';
import ItemList from './ItemList';
import fetchProductos from '../mock-api/promesa';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

    const [prod, setProd] = useState([]);
    const {id} = useParams();
    
    const [load, setLoad] = useState(true);//para el <Spinner/>

    useEffect(() => {
        fetchProductos().then( productos => {
            let byIdOrAll = id ? productos.filter(element => element.category === id): productos;
            setProd(byIdOrAll);   
            setLoad(false);
        });
        console.log('useEffect ItemListContainer');
        return () => {
            console.log('useEffect unmount');
            setLoad(true)
        }
    }, [id])

    return (
        <div style={divStyle}>    
            {load && <Spinner animation="border" role="status"/> } 
            <ItemList listProduct={prod}/>              
        </div>
    )
}

const divStyle = {
    margin: 0
};

export default ItemListContainer;