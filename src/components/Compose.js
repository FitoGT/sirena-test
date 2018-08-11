import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import SendButton from './SendButton';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import store from '../store';
/**
 * @api {get} /Compose.js Compose Component
 * @apiName Compose
 * @apiGroup Components
 *
 * 
 * @apiSuccessExample Success-Response:
 *    <div className={classes.root}>
 *     <TextField
 *         id="to"
 *         className={classNames(classes.margin, classes.textField)}
 *         InputProps={{
 *           startAdornment: <InputAdornment position="start">To</InputAdornment>,
 *         }}
 *       />
 *       <TextField
 *         id="subject"
 *         className={classNames(classes.margin, classes.textField)}
 *         InputProps={{
 *           startAdornment: <InputAdornment position="start">Subject</InputAdornment>,
 *         }}
 *       />
 *       <FormControl fullWidth className={classes.margin}>
 *         <InputLabel htmlFor="adornment-amount">Message</InputLabel>
 *         <Input
 *           id="message"
 *         />
 *       <SendButton/>
 *       </FormControl>
 *     </div>
 *
 */

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    flexBasis: 200,
  },
  
});

const select={
  width:155
};


class Compose extends React.Component {
  state = {
    age: '',
    message:'',
    subject:''
  };

 handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    
  };
  handleChangeText = event => {
    this.setState({ [event.id]: event.value });
    if(event.value!==""){
      this.sendDraft(this.state);
    }
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };
  render() {   
    const { classes } = this.props;
    const mails = require('../json/data.json');
    return (
      <div className={classes.root}>
      <form className={classes.root} autoComplete="off">
          <FormControl className={classes.formControl}>
              <InputLabel shrink htmlFor="age-label-placeholder">
                To
              </InputLabel>
              <Select
                value={this.state.age}
                onChange={this.handleChange}
                input={<Input name="age" id="to" />}
                displayEmpty
                name="age"
                className={classes.selectEmpty}
                style={select}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {mails.map(mail => {
                    return (
                      <MenuItem key={mail.id} id={mail.id} value={mail.email}>{mail.email}</MenuItem>
                    );
                  })}
              </Select>
            </FormControl>
            <br/>  
            <TextField
              id="subject"
              className={classNames(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: <InputAdornment position="start">Subject</InputAdornment>,
              }}
              onChange={(evt) => this.handleChangeText(evt.target)}
            />
            <FormControl fullWidth className={classes.margin}>
              <InputLabel htmlFor="adornment-amount">Message</InputLabel>
              <Input
                id="message"
                onChange={(evt) => this.handleChangeText(evt.target)}
              />
            <SendButton/>
        </FormControl>
        </form>
      </div>
    );
  }

  sendDraft = props=>{
    
    var draft = [{'to':props.age,'subject':props.subject,'message':props.message}];
    
    store.dispatch({
      type:"SEND_DRAFT",
      draft
    })
    
    
  }
}



export default withStyles(styles)(Compose);