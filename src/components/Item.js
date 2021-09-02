import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Item = ({ id, title, price, pictureUrl }) => {
  return (
    <div>
      <Card
        className="animate__animated animate__fadeIn"
        style={{ width: '16rem', margin: '10px' }}
      >
        <Card.Img variant="top" src={pictureUrl} />
        <Card.Header>
          <Card.Title>{title}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>${price}</Card.Text>
          <NavLink to={`/item/${id}`}>
            <div className="d-grid gap-2">
              <Button variant="secondary" size="sm">
                Ver detalle
              </Button>
            </div>
          </NavLink>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Item
