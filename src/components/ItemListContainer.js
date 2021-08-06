import React from "react";
import { ListGroup, Card } from 'react-bootstrap';
import ItemList from './ItemList';


const ItemListContainer = ({greeting}) => {
    return (
        <div style={divStyle}>
                <Card style={{ width: '18rem' }}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <ItemList/>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    )
}

const divStyle = {
    margin: 10
};

export default ItemListContainer;