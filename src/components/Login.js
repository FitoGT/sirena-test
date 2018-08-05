import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import store from '../store';
import {Link} from 'react-router-dom';
class Login extends Component {
constructor(props){
  super(props);
  
 }
render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
           />
           <TextField
             id="username"
             hintText="Enter your Email"
             floatingLabelText="Email"
             />
           <br/>
             <TextField
               id="password"
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={() => this.logIn()}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
  logIn = props=>{
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if(username == 'test@getsirena.com' && password == 'test'){
      store.dispatch({
         type:"LOG_IN",
         sent:[],
         logged:true
       });
    }else{
      alert('Email not valid')
    }
  } 
}
const style = {
 margin: 15,
};
export default Login;