import React, { useState, useContext } from 'react'
import { Button, Badge } from 'react-bootstrap'
import { useHistory, Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'
import Swal from 'sweetalert2'

const ItemDetail = product => {
  const { title, price, pictureUrl, description, stock } = product

  const { addItem, currencyFormat } = useContext(CartContext)

  const [hideItemCount, setHideItemCount] = useState(false)

  let history = useHistory()
  const handleGoBack = () => {
    history.goBack()
  }

  const onAdd = stockValue => {
    stockValue === 1
      ? Swal.fire({
        title: 'Bien!',
        text: `Has agregado  ${stockValue} producto al carrito`,
        icon: 'success',
        confirmButtonColor: 'green'
      })
      : Swal.fire({
        title: 'Bien!',
        text: `Has agregado  ${stockValue} productos al carrito`,
        icon: 'success',
        confirmButtonColor: 'green'
      })
    setHideItemCount(true)
    addItem(product, stockValue)
  }

  return (
    <div className="container-fluid">
      <Button className="btn btn-primary btn-sm" onClick={handleGoBack}>
        Atras
      </Button>
      <div className="row animate__animated animate__fadeIn">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-7">
              <h3 className="text-center"> {title} </h3>
              <dl>
                <dt>
                  <Badge pill bg="success">
                    <h4>{currencyFormat(price)}</h4>
                  </Badge>{' '}
                </dt>
                <br />
                <dd>
                  <img
                    variant="top"
                    src={pictureUrl}
                    width="500"
                    height="432"
                    alt={title}
                  />
                </dd>
                <dt>Descripcion</dt>
                <dd>{description}</dd>
              </dl>
            </div>
            <div className="col-md-5">
              {!hideItemCount ? (
                <ItemCount stock={stock} initial={1} onAdd={onAdd} />
              ) : (
                <Link to="/cart">
                  <Button variant="success" size="lg">
                    Ver carrito
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
