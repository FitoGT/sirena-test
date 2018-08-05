import React, { Component,Fragment } from 'react';
import Navbar from "./Navbar";
import Grid from '@material-ui/core/Grid';
import SimpleList from "./SimpleList.js";
import Mailslist from "./Mailslist.js";
import {BrowserRouter,Link,Route} from 'react-router-dom';
import Mails from './Mails';
import ComposeButton from './ComposeButton';
import Compose from './Compose';
const divStyle = {
  flexGrow: '0',
};
class App extends Component {
  render() {
	const mails = require('../json/data.json');
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
		     <Route  path ="/mails" render={
		     	props => <Mailslist {...props} mails={mails}/>
		     	}  />
		     	<Route path="/compose" component={Compose} />
		    </Grid>
	      </Grid>
	      <ComposeButton/>
      	</div>
      </Fragment>
    </BrowserRouter>
    );
  }
}

export default App;
