import React from "react";
import { CardGroup } from 'react-bootstrap';
import ItemList from './ItemList';


const ItemListContainer = ({greeting}) => {
    return (
        <div style={divStyle}>        
            <CardGroup>
                <ItemList/>
            </CardGroup>      
        </div>
    )
}

const divStyle = {
    margin: 0
};

export default ItemListContainer;