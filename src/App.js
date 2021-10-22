import React from 'react'
import About from './Mainpage/About/About'
import Home from '../src/Mainpage/Home/Home'
import Product from './Mainpage/product/Product'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
export default function App() {

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/About' component={About} />
          <Route exact path='/Product' component={Product} ></Route>
        </Switch>
      </BrowserRouter>

    </div>
  )
}

