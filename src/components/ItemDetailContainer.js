import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Spinner} from 'react-bootstrap';
import ItemDetail from './ItemDetail';
import fetchProductos from '../mock-api/promesa';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [load, setLoad] = useState(true);//para el <Spinner/>

    const {id} = useParams();

    useEffect(() => {
        fetchProductos().then( productos => {
            let byId = productos.find(element => element.id === parseInt(id));
            setProduct(byId);
            setLoad(false);
        }).catch(console.log);
        console.log('useEffect');
    }, [id])

    return (
        <div>
            <Container>                  
                {
                 load 
                ? 
                    <Spinner animation="border" role="status"/> 
                : 
                    <Row>           
                    <Col xs lg="12">
                          <ItemDetail 
                              key={product.id} 
                              id={product.title}
                              title={product.title} 
                              price={product.price} 
                              pictureUrl={product.pictureUrl} 
                              description={product.description}
                              stock={product.stock}
                          />
                      </Col>                             
                    </Row>
                } 
              
            </Container>
        </div>
    )
}

export default ItemDetailContainer;
