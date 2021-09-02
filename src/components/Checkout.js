import React, { useContext, useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { getFirestore } from '../firebase/firebase-config'
import { Timestamp } from 'firebase/firestore'
import { CartContext } from '../context/CartContext'
import { Button } from 'react-bootstrap'
import { NavLink, useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'

import 'bootstrap/dist/css/bootstrap.min.css'

const Checkout = () => {
  const { items, totalPriceCart, clearAllItems } = useContext(CartContext)

  const [isSubmitting, setIsSubmitting] = useState(false)

  let history = useHistory()
  const handleGoBack = () => {
    history.goBack()
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      address: '',
      phone: '',
      email: ''
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .min(3, 'Nombre debe tener al menos 3 caracteres')
        .required('Debes ingresar un nombre'),
      address: yup
        .string()
        .min(5, 'Debes agregar una direccion minimo 5 caracteres')
        .required('La direccion es obligatoria'),
      phone: yup
        .string()
        .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          'Formato de numero de telefono es invalido'
        )
        .required('Debes ingresar tu numero de telefono'),
      email: yup
        .string()
        .email('Formato Email invalido')
        .required('Email es obligatorio')
    }),
    onSubmit: values => {
      const newItems = items.map(({ item, quantity }) => ({
        item: {
          id: item.id,
          title: item.title,
          price: item.price
        },
        quantity
      }))

      console.log('newItems', newItems)

      const db = getFirestore()
      const orders = db.collection('orders')
      const batch = db.batch()

      const newOrder = {
        buyer: values,
        items: newItems,
        date: Timestamp.fromDate(new Date()),
        total: totalPriceCart()
      }

      orders
        .add(newOrder)
        .then(response => {
          console.log('response: ', response)

          items.forEach(({ item, quantity }) => {
            const docRef = db.collection('items').doc(item.id)
            batch.update(docRef, { stock: item.stock - quantity })
          })
          batch.commit()

          Swal.fire({
            title: 'Orden creada',
            text: 'El ID de su orden es: ' + response.id,
            icon: 'success',
            confirmButtonColor: 'green',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })

          clearAllItems()
          setIsSubmitting(true)
        })
        .catch(error => console.log(error))
    }
  })
  if (!isSubmitting) {
    return (
      <div className="col-md-8 animate__animated animate__fadeIn">
        <h2 className="text-center">Carga tus datos</h2>
        <Button
          className="btn btn-secondary btn-sm"
          style={{ marginBottom: '10px' }}
          onClick={handleGoBack}
        >
          Atras
        </Button>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Tu nombre</label>
            <input
              className="form-control"
              id="name"
              name="name"
              type="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="alert alert-danger" role="alert">
                {formik.errors.name}
              </div>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="address">Tu direccion</label>
            <input
              className="form-control"
              id="address"
              name="address"
              type="address"
              onChange={formik.handleChange}
              value={formik.values.address}
            />
            {formik.touched.address && formik.errors.address ? (
              <div className="alert alert-danger" role="alert">
                {formik.errors.address}
              </div>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Tu telefono</label>
            <input
              className="form-control"
              id="phone"
              name="phone"
              type="phone"
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="alert alert-danger" role="alert">
                {formik.errors.phone}
              </div>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="email">Tu email</label>
            <input
              className="form-control"
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="alert alert-danger" role="alert">
                {formik.errors.email}
              </div>
            ) : null}
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-lg"
            style={{ marginTop: '20px' }}
          >
            Realizar compra
          </button>
        </form>
      </div>
    )
  } else {
    return (
      <div className="container animate__animated animate__fadeIn">
        <div className="row">
          <div className="col-md-12">
            <h3 className="text-center cart__placeholder-title">
              Gracias por tu compra
            </h3>
            <p className="cart__placeholder-subtitle">
              ¡Hay muchos mas productos que te esperan!
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

export default Checkout
