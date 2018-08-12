import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import store from '../store';
/**
 * @api {get} /SendButton.js SendButton Component
 * @apiName SendButton
 * @apiGroup Components
 * @apiSuccessExample Success-Response:
 *     <div>
 *        <Button onClick={()=>this.sendMail()} variant="contained" color="primary" className={classes.button}>
 *         Send
 *         <Icon className={classes.rightIcon}></Icon>
 *       </Button>
 *     </div>
 *
 */
const styles = theme => ({

  button: {
    margin: theme.spacing.unit,
    float: 'left',
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

class SendButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sent: []
    };
  }  
  render() {
    const { classes } = this.props;
    return (
      <div>
         <Button onClick={()=>this.sendMail()} variant="contained" color="primary" className={classes.button}>
          Send
          <Icon className={classes.rightIcon}></Icon>
        </Button>
      </div>
    );
  }

  sendMail = props=>{
    //no me juzguen, no quiero refactorizar jeje
    var to = document.getElementById('to').getElementsByTagName('div')[0].getElementsByTagName('div')[0].getElementsByTagName('div')[0].getElementsByTagName('div')[0].getElementsByTagName('p')[0].innerHTML;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    var sentMail = [{'to':to,'subject':subject,'message':message}];
    store.dispatch({
      type:"SEND_MAIL",
      sentMail
    })
    store.dispatch({
      type:"SEND_DRAFT",
      draft:[]
    })
    var link = document.getElementById('sent');
    link.click();

  }
}



SendButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SendButton);