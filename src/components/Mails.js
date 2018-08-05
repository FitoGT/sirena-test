import React, { Component,Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};
function Mails(props) {
  console.log(props);
  const { classes } = props;

  return (
  	<Fragment>
    <div>
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