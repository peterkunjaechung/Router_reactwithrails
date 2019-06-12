import React from "react";
import axios from "axios";
import { Button, Header, Segment, } from "semantic-ui-react";

class ProductView extends React.Component {
  state = { product: {}, };

  componentDidMount() {
    const { id, } = this.props.match.params;
    axios.get(`/api/products/${id}`)
      .then( res => {
        this.setState({ product: res.data, });
      })
  };

  render() {
    const { product: { name, department, price, }, } = this.state;

    return (
      <div>
        <Segment>
          <Header as="h1">{name}</Header>
          <Header as="h3">{department}</Header>
          <Header as="h5" color="grey">${price}</Header>
        </Segment>
        <br />
        <br />
        <Button 
          color="black" 
          onClick={this.props.history.goBack}
        >
          Back
        </Button>
      </div>
    );
  };
};

export default ProductView;
