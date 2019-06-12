import React from 'react';
import Home from "./components/Home";
import About from "./components/About";
import NoMatch from "./components/NoMatch";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ProductsForm from "./components/ProductsForm";
import ProductView from "./components/ProductView";
import { Container, } from "semantic-ui-react";
import { Route, Switch, } from "react-router-dom";

const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/new" component={ProductsForm} />
        {/* /products/2  /products/taco */}
        <Route exact path="/products/:id" component={ProductView} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </>
);

export default App;

