import React, {useState, useEffect} from 'react';
import {Row, Col, Spinner} from 'react-bootstrap';
import  Item  from './Item';
import fetchProductos from '../api/promesa';

const ItemList = () => {
    const [prod, setProd] = useState([]);
    const [loading, setLoading] = useState(true);//para el <Spinner/>
 
    useEffect(() => {
        fetchProductos().then( productos => {
            setProd(productos);
            setLoading(false);
        });
        console.log('useEffect');
    }, [])
   
    return (
        <div>
            <Row xs={1} md={2} className="g-4">
                {loading && <Spinner animation="border" role="status"/> } 
                {prod.map(item => (
                    <Col xs={12} md={8}>
                        <Item key={item.id} title={item.title} price={item.price} pictureUrl={item.pictureUrl}></Item>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default ItemList;