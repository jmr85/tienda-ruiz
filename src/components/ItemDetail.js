import React from 'react'
import { Card } from 'react-bootstrap';

const ItemDetail = ({title, price, pictureUrl, description}) => {
    return (
        <div>
            <Card border="dark" style={{ width: '18rem' }}>
                <Card.Header>
                    {title}
                </Card.Header>
                <Card.Body>
                    <Card.Title>${price}</Card.Title>
                    <Card.Img variant="top" src={pictureUrl} />
                    <Card.Text>
                        Description: <br/>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail;
