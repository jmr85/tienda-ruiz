import React, {useState, useEffect} from "react";
import { Spinner, Container } from 'react-bootstrap';
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
            <Container>     
                {load && <Spinner animation="border" role="status"/> } 
                <ItemList listProduct={prod}/>      
            </Container>    
        </div>
    )
}

const divStyle = {
    margin: 0
};

export default ItemListContainer;