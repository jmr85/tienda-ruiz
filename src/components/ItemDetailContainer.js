import React, { useState, useEffect } from 'react'
import { getItemById } from '../helpers/items'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const [load, setLoad] = useState(true) //para el <Spinner/>

  const { id } = useParams()

  useEffect(() => {
    getItemById(id, setProduct, setLoad);
    console.log('useEffect')
  }, [id])

  return (
    <div>
      <Container>
        {load ? (
          <Spinner animation="border" role="status" />
        ) : (
          <Row>
            <Col xs lg="12">
              <ItemDetail
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                pictureUrl={product.imageId}
                description={product.description}
                stock={product.stock}
              />
            </Col>
          </Row>
        )}
      </Container>
    </div>
  )
}

export default ItemDetailContainer
