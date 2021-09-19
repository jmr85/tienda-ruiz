import React, { useContext, useEffect } from 'react'
import { CartContext } from '../context/CartContext'
import { Badge, Button } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'

const Cart = () => {
  const { items, setItems, removeItem, clearAllItems, totalPriceCart, currencyFormat } =
    useContext(CartContext)

  useEffect(() => {
    setItems(items)
    console.log('items de Cart.js Component: ', items)
  }, [items, setItems])

  if (items.length !== 0) {
    return (
      <div className="container-fluid animate__animated animate__fadeIn">
        <div className="row">
          <div className="col-md-12">
            {/* <h3 className="text-center">Cart</h3> */}

            <table className="table">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {items.map((element, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        style={{
                          marginRight: '20px',
                          marginBottom: '10px',
                          marginTop: '10px'
                        }}
                        width="70"
                        height="80"
                        src={element.item.pictureUrl}
                        alt={element.item.title}
                      />
                      {element.item.title}
                    </td>
                    <td>{element.quantity}</td>
                    <td>{currencyFormat(element.item.price)}</td>
                    <td>{currencyFormat(element.item.price * element.quantity)}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => removeItem(element.item.id)}
                        className="btn btn-danger"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </td>
                  </tr>
                ))}
                <tr className="table-active">
                  <td>
                    <h2>
                      <Badge bg="success">
                        Total: {currencyFormat(totalPriceCart())}
                      </Badge>
                    </h2>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <div className="text-center me-12">
              <button
                style={{ margin: '20px' }}
                type="button"
                onClick={() => clearAllItems()}
                className="btn btn-secondary btn-lg"
              >
                Vaciar Carrito
              </button>
              <Link to="/checkout">
                <Button variant="primary" size="lg">
                  Continuar compra
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container animate__animated animate__fadeIn">
        <div className="row">
          <div className="col-md-12">
            <h3 className="text-center cart__placeholder-title">
              Tu carrito está vacío
            </h3>
            <p className="cart__placeholder-subtitle">
              ¿No sabés qué comprar? ¡Miles de productos te esperan!
            </p>
            <NavLink to="/">
              <div className="d-grid gap-2">
                <Button variant="secondary" size="lg">
                  Volver al listado
                </Button>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default Cart
