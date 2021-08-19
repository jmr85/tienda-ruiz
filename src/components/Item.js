import React from 'react';
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';


const Item = ({id,title,price,pictureUrl}) => {

    return (
        <div>            
            <Card className="animate__animated animate__fadeIn" style={{ width: '16rem' }}>
                <Link to ={`/item/${id}`}> 
                    <Card.Img variant="top" src={pictureUrl} />
                    <Card.Header>
                        
                        <Card.Title>        
                            {title}
                        </Card.Title>
                    
                    
                    </Card.Header>
                    <Card.Body>              
                        <Card.Text>
                            ${price}
                        </Card.Text>
                      
                    </Card.Body>
                </Link>
            </Card>           
        </div>
    );

}

export default Item;