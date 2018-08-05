import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import SendButton from './SendButton';
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



class Compose extends React.Component {
  state = {
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
      <TextField
          id="to"
          className={classNames(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start">To</InputAdornment>,
          }}
        />
        <TextField
          id="subject"
          className={classNames(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start">Subject</InputAdornment>,
          }}
        />
        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="adornment-amount">Message</InputLabel>
          <Input
            id="message"
          />
        <SendButton/>
        </FormControl>
      </div>
    );
  }
}

Compose.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Compose);