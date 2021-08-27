import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Item from './Item';



const ItemList = ({listProduct}) => {

    return (
        <div>
            <Row xs={1} md={4} className="g-4">
                {listProduct.map(item => (                                          
                    <Col key={item.id}>
                        <Item
                            key={item.id} 
                            id={item.id}
                            title={item.title} 
                            price={item.price} 
                            pictureUrl={item.imageId} 
                        />
                      
                    </Col>                   
                ))}   
            </Row>           
        </div>
    );
}

export default ItemList;