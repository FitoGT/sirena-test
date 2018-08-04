import React, { Component } from 'react';
import Navbar from "./Navbar";
import Grid from '@material-ui/core/Grid';
import SimpleList from "./SimpleList.js";
import Mailslist from "./Mailslist.js";
const divStyle = {
  flexGrow: '0',
};
class App extends Component {
  render() {
    return (
      <div>
	      <Navbar/>
	      <Grid container>
	      	<Grid item lg style={divStyle}>
		     <SimpleList/>
		    </Grid>
		    <Grid item sm > 
		     <Mailslist/>
		    </Grid>
	      </Grid>
      </div>
    );
  }
}

export default App;
