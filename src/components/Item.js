import React from 'react';
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Item = ({id,title,price,pictureUrl}) => {

    return (
        <div>    
            <Card style={{ width: '16rem' }}>
                <Card.Img variant="top" src={pictureUrl} />
                <Card.Header>
                    <Link to ={`/item/${id}`}> 
                        LINK
                    </Link>
                    <Card.Title>        
                        {title}
                    </Card.Title>
                </Card.Header>
                <Card.Body>              
                    <Card.Text>
                        ${price}
                    </Card.Text>
                </Card.Body>
            </Card>           
        </div>
    );

}

export default Item;