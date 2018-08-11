import React  from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function EmailsBlock(props) {
    return (
    	<div>
	        <Card >
	        <CardContent>
	          <Typography variant="headline" component="h2">
	            {props.message}
	          </Typography>
	        </CardContent>
	        <CardActions>
	        </CardActions>
	      </Card>
	    </div>
  );  
}


export default EmailsBlock;