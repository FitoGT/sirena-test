import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
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
        </CardActions>
      </Card>
    </div>
    </Fragment>
  );
}


export default Mails;