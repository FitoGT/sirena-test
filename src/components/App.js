import React, { Component,Fragment } from 'react';
import Navbar from "./Navbar";
import Grid from '@material-ui/core/Grid';
import SimpleList from "./SimpleList.js";
import Mailslist from "./Mailslist.js";
import {BrowserRouter,Route} from 'react-router-dom';
import ComposeButton from './ComposeButton';
import Compose from './Compose';
import SentMailList from './SentMailList';
import Login from './Login';
import store from '../store';
import Drafts from './Drafts';
/**
 * @api {get} /App.js App Component
 * @apiName App
 * @apiGroup Components
 *
 * 
 *
 * @apiSuccess {mails} json ../json/data.json.
 *
 * @apiSuccessExample Success-Response:
 *     <BrowserRouter>
 *     <Fragment>
 *       <div>
 *       <Navbar />
 *       <Grid container>
 *         <Grid item lg style={divStyle}>
 *        <SimpleList cont={this.state.sent.length}/>
 *       </Grid>
 *       <Grid item sm > 
 *        <Route  path ="/mails" render={
 *         props => <Mailslist {...props} mails={mails}/>
 *         }  />
 *        <Route path="/compose" component={Compose} />
 *        <Route  path ="/sent" render={
 *         props => <SentMailList {...props} sent={this.state.sent}/>
 *         }  />
 *       </Grid>
 *       </Grid>
 *       <ComposeButton/>
 *       </div>
 *     </Fragment>
 *   </BrowserRouter>
 *
 */
const divStyle = {
  flexGrow: '0.2',
};
class App extends Component {
	constructor(props) {
    super(props);
    this.state = {
      sent: [],
      logged: false,
      draft: []
    };

    store.subscribe(()=>{
     this.setState({
     	 sent: store.getState().sent,
       logged: store.getState().logged,
       draft: store.getState().draft
     })	
    })
  }		
  render() {
	const mails = require('../json/data.json');
	  if(this.state.logged){
      var draftCont=0;
      if(this.state.draft){
        draftCont=this.state.draft.length;
      }
      return (
        <BrowserRouter>
          <Fragment>
            <div>
            <Navbar />
            <Grid container>
              <Grid item lg style={divStyle}>
             <SimpleList contDrafts={draftCont} cont={this.state.sent.length} contInbox={mails.length}/>
            </Grid>
            <Grid item sm > 
            <Route exact path ="/" render={
               props => <Mailslist {...props} mails={mails}/>
               }  />
             <Route  path ="/mails" render={
               props => <Mailslist {...props} mails={mails}/>
               }  />
             <Route path="/compose" component={Compose} / >
             <Route exact path ="/drafts" render={
               props => <Drafts {...props} drafts={this.state.draft}/>
               }  />
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
    }else{
      return(
        <Login />
      )
    }
    
  }
}

export default App;
