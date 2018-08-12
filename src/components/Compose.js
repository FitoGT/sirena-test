import React from 'react';
import classNames from 'classnames';
import NoSsr from '@material-ui/core/NoSsr';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import SendButton from './SendButton';
import MenuItem from '@material-ui/core/MenuItem';
import Select from 'react-select';
import store from '../store';
import Control from './Control';
import Option from './Option';
import NoOptionsMessage from './NoOptionsMessage';
import Placeholder from './Placeholder';
import SingleValue from './SingleValue';
import ValueContainer from './ValueContainer';
import { emphasize } from '@material-ui/core/styles/colorManipulator';




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
    flexGrow: 1,
    height: 250,
  },
  input: {
    display: 'flex',
    padding: 0,
  },
  valueContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
  },
  noOptionsMessage: {
    fontSize: 16,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  singleValue: {
    fontSize: 16,
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    fontSize: 16,
  },
});


const select={
  width:155
};

const suggestions = require('../json/data.json').slice(0, 100).map(suggestion => ({
  value: suggestion.email,
  label: suggestion.email,
}));

const components = {
  Option,
  Control,
  NoOptionsMessage,
  Placeholder,
  SingleValue,
  ValueContainer,
};
class Compose extends React.Component {
  state = {
    age: '',
    message:'',
    subject:'',
    single: null,
  };

 handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    
  };
  handleChangeSelect = name => value => {
    console.log(value)
    this.setState({
      [name]: value,
    });
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
    if(this.props.location.pathname.length>9){
      var arrayData = this.props.location.pathname.split('/');
      var object = {value:arrayData[2],label:arrayData[2]};
      this.state.single = object;
      this.state.subject = arrayData[3];
      this.state.message = arrayData[4];
    }
    return (
      <div className={classes.root}>
      <form className={classes.root} autoComplete="off">
      <NoSsr style={{width:'560px'}}>
          <Select 
            classes={classes}
            options={suggestions}
            components={components}
            value={this.state.single}
            onChange={this.handleChangeSelect('single')}
            placeholder="Search for a email"
            id="to"
          />
        </NoSsr>
          
            <br/>  
            <TextField
              id="subject"
              value={this.state.subject}
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
                value={this.state.message}
                onChange={(evt) => this.handleChangeText(evt.target)}
              />
            <SendButton/>
        </FormControl>
        </form>
      </div>
    );
  }

  sendDraft = props=>{
    
    var draft = [{'to':props.single.value,'subject':props.subject,'message':props.message}];
    console.log(draft);
    store.dispatch({
      type:"SEND_DRAFT",
      draft
    })
    
    
  }
}



export default withStyles(styles)(Compose);