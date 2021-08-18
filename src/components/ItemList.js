import React from 'react';
import {Row, Col } from 'react-bootstrap';
import Item from './Item';


const ItemList = ({listProduct}) => {

    return (
        <div>
            <Row md={1} className="g-5"> 
                {listProduct.map(item => (                                          
                    <Col key={item.id}>
                        <Item
                            key={item.id} 
                            id={item.id}
                            title={item.title} 
                            price={item.price} 
                            pictureUrl={item.pictureUrl} 
                        />
                    </Col>                   
                ))}
            </Row>
        </div>
    );
}

export default ItemList;