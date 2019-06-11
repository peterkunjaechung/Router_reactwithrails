import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import { Container, } from "semantic-ui-react";
import Navbar from './components/Navbar';
import Products from './components/Products';
import ProductsForm from './components/ProductsForm';
import ProductView from './components/ProductView';

const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NoMatch} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/new" component={ProductsForm} />
        <Route exact path="/products/:id" component={ProductView} />
      </Switch>
    </Container>
  </Fragment>
);

export default App;
