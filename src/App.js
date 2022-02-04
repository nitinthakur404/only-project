import React from 'react'
import About from './Mainpage/About/About'
import Home from '../src/Mainpage/Home/Home'
import Product from './Mainpage/product/Product'
import CompleterDetails from '../src/Mainpage/product/CompleterDetails'
import Cart from './Cart'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
export default function App() {

  // console.log(Cart)
  return (
    < div >
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/About' component={About} />
          <Route exact path='/Product' component={Product} ></Route>
          <Route exact path="/Product/:id" component={CompleterDetails} ></Route>
          <Route exact path="/cart" component={Cart} ></Route>
        </Switch>
      </BrowserRouter>

    </div >
  )
}

