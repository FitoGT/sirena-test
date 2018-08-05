import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
const styles = theme => ({
  root: {
    width: '100%',
  },
  table: {
    minWidth: 500,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});
class SentMailList extends Component {
 
  render() {
  	
    const { classes } = this.props;
    var sentMails = [];
    if(this.props.sent.length>0){
    	this.props.sent.map(function(object,i){
        //console.log(object);
        sentMails.push(
          <TableRow  key={i} >
            <TableCell component="th" scope="row" >
              {object.to}
            </TableCell>
            <TableCell >
              {object.subject}
            </TableCell>
          </TableRow>
        );
      });
      return (
      	<div className="MuiPaper-root-9 MuiPaper-elevation2-13 MuiPaper-rounded-10 Mailslist-root-417">
	        <Table >
	            <TableBody>
	            	{sentMails}
	            </TableBody>
	      	</Table>
      	</div>
      );		
    }else{
      return (
	      <div>
	        <Card >
	        <CardContent>
	          <Typography variant="headline" component="h2">
	            No emails sent
	          </Typography>
	        </CardContent>
	        <CardActions>
	        </CardActions>
	      </Card>
	      </div>
	    );		
    }
    
  } 
}


export default SentMailList;