import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import ItemCount from './ItemCount';

const ItemDetail = ({title, price, pictureUrl, description}) => {

    let history = useHistory();
    const handleOnclick = () => {
            history.push('/');
    }

    return (
        <div className="animate__animated animate__fadeIn">
            <Button onClick={handleOnclick}>Atras</Button>
            <Row  className="g-4">      
                <Col md="12" sm="12">
                <Card  border="dark" style={{ width: '18rem' }}>
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
                </Col>
                <ItemCount stock={5} initial={1}/>
            </Row>
            
        </div>
    )
}

export default ItemDetail;
