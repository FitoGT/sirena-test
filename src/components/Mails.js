import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import store from '../store';
/**
 * @api {get} /Mails.js Mails Component
 * @apiName Mails
 * @apiGroup Components
 *
 * 
 * @apiSuccessExample Success-Response:
 *  <Fragment>
 *   <div style={{marginTop: 10}} >
 *     <Card >
 *       <CardContent>
 *         <Typography color="textSecondary">
 *          Subject: {props.subject}
 *         </Typography>
 *         <Typography variant="headline" component="h2">
 *           {props.message}
 *         </Typography>
 *         <Typography  color="textSecondary">
 *           From : {props.firstName} {props.lastName}
 *         </Typography>
 *         <Typography component="p">
 *           {props.email}
 *         </Typography>
 *       </CardContent>
 *       <CardActions>
 *       </CardActions>
 *     </Card>
 *   </div>
 *   </Fragment>
 *
 */
function Mails(props) {
  if(props.show==true){
    return (
    <Fragment>
    <div style={{marginTop: 10}} >
      <Card >
        <CardContent>
          <Typography color="textSecondary">
           Subject: {props.subject}
          </Typography>
          <Typography variant="headline" component="h2">
            {props.message}
          </Typography>
          <Typography  color="textSecondary">
            From : {props.firstName} {props.lastName}
          </Typography>
          <Typography component="p">
            {props.email}
          </Typography>
        </CardContent>
        <CardActions>
          <div>
             <Button onClick={()=>hideMails()} variant="contained" color="primary">
              Back
            </Button>
          </div>
        </CardActions>
      </Card>
    </div>
    </Fragment>
  );
  }else{
    return null;
  }
  
}

function hideMails(){
  store.dispatch({
    type:"SHOW_MAILS",
    show:false
  });
}


export default Mails;