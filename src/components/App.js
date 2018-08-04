import React, { Component,Fragment } from 'react';
import Navbar from "./Navbar";
import Grid from '@material-ui/core/Grid';
import SimpleList from "./SimpleList.js";
import Mailslist from "./Mailslist.js";
import {BrowserRouter,Link,Route} from 'react-router-dom';
import Mails from './Mails';
const divStyle = {
  flexGrow: '0',
};
class App extends Component {
  render() {
    return (
    	
    <BrowserRouter>
      <Fragment>
      	<div>
	      <Navbar/>
	      <Grid container>
	      	<Grid item lg style={divStyle}>
		     <SimpleList/>
		    </Grid>
		    <Grid item sm > 
		     <Route path ="/inbox" component={Mailslist} />
        	 <Route exact path ="/mails" component={Mails} />
		    </Grid>
	      </Grid>
      	</div>
      </Fragment>
    </BrowserRouter>
    );
  }
}

export default App;
