import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Spinner} from 'react-bootstrap';
import ItemDetail from './ItemDetail';
import fetchProductos from '../mock-api/promesa';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const [load, setload] = useState(true);//para el <Spinner/>

    const getItems = () => {
        fetchProductos().then( productos => {
            setProduct(productos);
            setload(false);
        }).catch(console.log);
    }

    useEffect(() => {
        getItems();
        console.log('useEffect');
    }, [])

    return (
        <div>
            <Container fluid="md">                   
            {load && <Spinner animation="border" role="status"/> } 
                <Row>
                {product.map(item => (
                    <Col>
                        {/*solo muestra el id 1*/}
                        {item.id === 1 && <ItemDetail 
                            key={item.id} 
                            title={item.title} 
                            price={item.price} 
                            pictureUrl={item.pictureUrl} 
                            description={item.description}
                        />}
                    </Col> 
                ))}                   
                </Row>
            </Container>
        </div>
    )
}

export default ItemDetailContainer;
