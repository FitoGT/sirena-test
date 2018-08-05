import React, { Component,Fragment } from 'react';
import Navbar from "./Navbar";
import Grid from '@material-ui/core/Grid';
import SimpleList from "./SimpleList.js";
import Mailslist from "./Mailslist.js";
import {BrowserRouter,Route} from 'react-router-dom';
import ComposeButton from './ComposeButton';
import Compose from './Compose';
import SentMailList from './SentMailList';
import store from '../store';
const divStyle = {
  flexGrow: '0.2',
};
class App extends Component {
	constructor(props) {
    super(props);
    this.state = {
      sent: []
    };

    store.subscribe(()=>{
     this.setState({
     	sent: store.getState().sent
     })	
    })
  }		
  render() {
	const mails = require('../json/data.json');
	
    return (
    <BrowserRouter>
      <Fragment>
      	<div>
	      <Navbar />
	      <Grid container>
	      	<Grid item lg style={divStyle}>
		     <SimpleList cont={this.state.sent.length}/>
		    </Grid>
		    <Grid item sm > 
		     <Route  path ="/mails" render={
		     	props => <Mailslist {...props} mails={mails}/>
		     	}  />
		     <Route path="/compose" component={Compose} />
		     <Route  path ="/sent" render={
		     	props => <SentMailList {...props} sent={this.state.sent}/>
		     	}  />
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
