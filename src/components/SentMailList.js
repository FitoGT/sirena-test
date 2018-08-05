import React, { Component } from 'react';

class SentMailList extends Component {
 
  render() {
  	console.log(this.props)
    const { classes } = this.props;
    return (
      <div>
        <h1>Lista de Mails</h1>
      </div>
    );
  } 
}


export default SentMailList;