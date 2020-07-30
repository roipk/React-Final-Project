import React from 'react';


class FruitDetail extends React.Component {
   render() {

     return (
       <div>
         <h1>Hello {this.props.match.params.name}</h1>
      </div>
      );
   }
 }

export default FruitDetail;

