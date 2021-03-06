import React, { Component,Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePaginationActions from './TablePaginationActions';
import Mails from './Mails';
import {Link,Route} from 'react-router-dom';
import store from '../store';

/**
 * @api {get} /Mailslist.js Mailslist Component
 * @apiName Mailslist
 * @apiGroup Components
 * @apiSuccessExample Success-Response:
 * <Fragment>
 *         <Paper className={classes.root}>
 *           <div className={classes.tableWrapper}>
 *             <Table className={classes.table}>
 *               <TableBody>
 *                 {mails.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(mail => {
 *                   return (
 *                     <TableRow  key={mail.id} >
 *                       <TableCell component="th" scope="row" >
 *                         <Link to={`${this.props.match.url}/${mail.id}`}>{mail.firstName}</Link>
 *                       </TableCell>
 *                       <TableCell >
 *                         <Link to={`${this.props.match.url}/${mail.id}`}>{mail.subject}</Link>
 *                       </TableCell>
 *                     </TableRow>
 *                   );
 *                 })}
 *                 {emptyRows > 0 && (
 *                   <TableRow style={{ height: 48 * emptyRows }}>
 *                     <TableCell colSpan={6} />
 *                   </TableRow>
 *                 )}
 *               </TableBody>
 *               <TableFooter>
 *               <TablePagination
 *                     colSpan={3}
 *                     count={mails.length}
 *                     rowsPerPage={rowsPerPage}
 *                     page={page}
 *                     onChangePage={this.handleChangePage}
 *                     onChangeRowsPerPage={this.handleChangeRowsPerPage}
 *                     ActionsComponent={TablePaginationActions}
 *                   /> 
 *               </TableFooter>
 *             </Table>
 *           </div>
 *        </Paper>
 *         <Route  path={`${this.props.match.url}/:mailsId`} render={
 *           ({match}) => <Mails {...mails.find(mail => mail.id == match.params.mailsId)}/>
 *         }/>
 *       </Fragment>
 *
 */
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
class Mailslist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      rowsPerPage: 20,
      show: false
    };
    store.subscribe(()=>{
     this.setState({
       show: store.getState().show
     });  
    })
  }


  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  showMails = props => {
    store.dispatch({
      type:"SHOW_MAILS",
      show:true
    })
  };


  render() {
    const { classes } = this.props;
    const { rowsPerPage, page } = this.state;
    const mails = this.props.mails;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, mails.length - page * rowsPerPage);
    var display = 'block';
    if(this.state.show==true){
      display = 'none';
    }
    return (
        <Fragment>
          <Paper className={classes.root}>
            <div className={classes.tableWrapper}  style={{display: display}}>
              <Table className={classes.table}>
                <TableBody>
                  {mails.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(mail => {
                    return (
                      <TableRow  key={mail.id} >
                        <TableCell component="th" scope="row" >
                          <Link to={`/mails/${mail.id}`} onClick={()=>this.showMails()}>{mail.firstName}</Link>
                        </TableCell>
                        <TableCell >
                          <Link to={`/mails/${mail.id}`} onClick={()=>this.showMails()}>{mail.subject}</Link>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 48 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
                <TableFooter>
                <TablePagination
                      colSpan={3}
                      count={mails.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      onChangePage={this.handleChangePage}
                      onChangeRowsPerPage={this.handleChangeRowsPerPage}
                      ActionsComponent={TablePaginationActions}
                    /> 
                </TableFooter>
              </Table>
            </div>
          </Paper>
          <Route  path={`/mails/:mailsId`} render={
            ({match}) => <Mails show={this.state.show} {...mails.find(mail => mail.id == match.params.mailsId)}/>
          }/>
        </Fragment>
    );
  }
} 


Mailslist.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Mailslist);