import React from 'react';
import {Table} from 'react-bootstrap'

class ProductDetail extends React.Component {
   render() {
  console.log(this.props.location.state)
 
     return (
       <div>
         <h1 style={{fontWeight:'bold'}}>{this.props.match.params.name}</h1>
         <Table bordered variant="dark" >
         <thead>
           <tr>
            <th  style={{textAlign:'center',verticalAlign:'middle'}}>#</th>
            <th  style={{textAlign:'center',verticalAlign:'middle'}}>Product Name</th>
            <th  style={{textAlign:'center',verticalAlign:'middle'}}>Description</th>
           < th  style={{textAlign:'center',verticalAlign:'middle'}}>Image</th>
          </tr>
         </thead>
          <tbody hover>
           <tr>
           <td></td>
            <td style={{textAlign:'center',verticalAlign:'middle'}}>{this.props.location.state.name}</td>
            <td style={{textAlign:'center',verticalAlign:'middle'}}>{this.props.location.state.description}</td>
            <td style={{textAlign:'center',verticalAlign:'middle'}}><img src={this.props.location.state.image} alt="true"/></td>
           
          </tr>
        </tbody>
        </Table>
      </div>
      );
   }
 }

export default ProductDetail;