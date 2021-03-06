import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import store from '../store';
/**
 * @api {get} /Login.js Login Component
 * @apiName Login
 * @apiGroup Components
 * @apiSuccessExample Success-Response:
 *    <div>
 *       <MuiThemeProvider>
 *         <div>
 *         <AppBar
 *            title="Login"
 *          />
 *          <TextField
 *            id="username"
 *            hintText="Enter your Email"
 *            floatingLabelText="Email"
 *            />
 *          <br/>
 *            <TextField
 *              id="password"
 *              type="password"
 *              hintText="Enter your Password"
 *              floatingLabelText="Password"
 *              />
 *            <br/>
 *            <RaisedButton label="Submit" primary={true} style={style} onClick={() => this.logIn()}/>
 *        </div>
 *        </MuiThemeProvider>
 *     </div>
 *
 */
const loginContainer = {
  margin: '0 auto',
  width: '500px'
};
class Login extends Component {

render() {
    return (
        <MuiThemeProvider>
          <div>
            <AppBar
               title="Login"
             />
             <div style={loginContainer}>
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
            </div>
         </MuiThemeProvider>
      
    );
  }
  logIn = props=>{
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if(username === 'test@getsirena.com' && password === 'test'){
      store.dispatch({
         type:"LOG_IN",
         sent:[],
         logged:true,
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