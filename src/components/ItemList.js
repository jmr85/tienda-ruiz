import React from 'react'
import { CardGroup } from 'react-bootstrap'
import Item from './Item'

const ItemList = ({ listProduct }) => {
  return (
    <div>
      <CardGroup>
        {listProduct.map(item => (
          <Item
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            categoryName={item.categoryName}
            pictureUrl={item.imageId}
          />
        ))}
      </CardGroup>
    </div>
  )
}

export default ItemList
