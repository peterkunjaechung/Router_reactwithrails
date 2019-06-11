import React, { useState, useEffect, } from "react";
import axios from "axios";
import { Button, Card, Header, } from "semantic-ui-react";
import { Link, } from "react-router-dom";

const Products = (props) => {
  const [products, setProducts] = useState([]);

  useEffect( () => {
    axios.get("/api/products")
      .then( res => {
        setProducts(res.data);
      })
  }, []);

  const renderProducts = () => {
    if (products.length <= 0)
      return <Header as="h2">No Products</Header>
    return products.map( product => (
      <Card>
        <Card.Content>
          <Card.Header>{product.name}</Card.Header>
          <Card.Meta>{product.department}</Card.Meta>
          <Card.Description>
            {product.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button as={Link} to={'/products/${product.id}'} color='blue'>
          View
          </Button>
          </Card.Content>
      </Card>
    ));
  };

  return (
    <div>
      <Header as="h1">Products</Header>
      <br />
      <Button as={Link} color="blue" to="/products/new">
      Add Product
      </Button>
      <br />
      <br />
      <Card.Group>
        { renderProducts() }
      </Card.Group>
    </div>
  );
};

export default Products;