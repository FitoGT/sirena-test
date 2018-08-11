import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import EmailBlock from './EmailBlock';
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
class Drafts extends Component {
 
  render() {
  	console.log(this.props);
    const { classes } = this.props;
    var draft = [];
    if(this.props.drafts){
      this.props.drafts.map(function(object,i){
        //console.log(object);
        draft.push(
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
                {draft}
              </TableBody>
          </Table>
        </div>
      );  
    }else{
      return (
	      <EmailBlock message ="No emails in draft"/>
	    );		
    }
    
  } 
}


export default Drafts;