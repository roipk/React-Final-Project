import React from 'react';
import {Table} from 'react-bootstrap'


class ProductDetail extends React.Component {
   render() {
  console.log(this.props.location.state)
 
     return (
       <div>
         <h1>{this.props.match.params.name}</h1>
         <Table striped bordered hover>
         <thead>
           <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Description</th>
           < th>Image</th>
          </tr>
         </thead>
          <tbody>
           <tr>
           <td></td>
            <td>{this.props.location.state.name}</td>
            <td>{this.props.location.state.description}</td>
            <td><img src={this.props.location.state.image} alt="true"/></td>
           
          </tr>
        </tbody>
        </Table>
      </div>
      );
   }
 }

export default ProductDetail;

