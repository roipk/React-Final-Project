import React from 'react';
import {Table} from 'react-bootstrap'

class ProductDetail extends React.Component {
   render() {
	console.log(this.props.location.state)
 
		return (
			<div>
				<span style={{fontWeight:'100',fontSize:'56px'}}>{this.props.match.params.name}</span>
			
				<Table bordered variant="dark" >
					<thead>
						<tr>
							<th style={{textAlign:'center',verticalAlign:'middle'}}>#</th>
							<th style={{textAlign:'center',verticalAlign:'middle'}}>Product Name</th>
							<th style={{textAlign:'center',verticalAlign:'middle'}}>Description</th>
							<th style={{textAlign:'center',verticalAlign:'middle'}}>Image</th>
						</tr>
					</thead>
          
					<tbody hover>
						<tr>
							<td></td>
							<td style={{textAlign:'center',verticalAlign:'middle'}}>{this.props.location.state.name}</td>
							<td style={{textAlign:'center',verticalAlign:'middle'}}>{this.props.location.state.description}</td>
							<td style={{textAlign:'center',verticalAlign:'middle'}}><img src={this.props.location.state.image} alt="true" width="350px"/></td>
						</tr>
					</tbody>
				</Table>
			</div>
		);
	}
}

export default ProductDetail;