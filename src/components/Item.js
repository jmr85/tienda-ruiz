import React from 'react';
import { Card } from 'react-bootstrap';

const Item = ({id,title,price,pictureUrl}) => {

    return (
        <div>    
            <Card style={{ width: '16rem' }}>
                <Card.Img variant="top" src={pictureUrl} />
                <Card.Body>
                <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        ${price}
                    </Card.Text>
                </Card.Body>
            </Card>           
        </div>
    );

}

export default Item;