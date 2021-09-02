import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NavBar from '../components/NavBar'
import ItemListContainer from '../components/ItemListContainer'
import ItemDetailContainer from '../components/ItemDetailContainer'
import Cart from '../components/Cart'
import Checkout from '../components/Checkout'
import PageNotFound from '../components/PageNotFound'

const RouterApp = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={ItemListContainer} />
            <Route exact path="/category/:id" component={ItemListContainer} />
            <Route exact path="/item/:id" component={ItemDetailContainer} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/checkout" component={Checkout} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default RouterApp
