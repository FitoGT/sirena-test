import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import {Link} from 'react-router-dom';
/**
 * @api {get} /SimpleList.js SimpleList Component
 * @apiName SimpleList
 * @apiGroup Components
 * @apiSuccessExample Success-Response:
 * <div className={classes.root}>
 *     <List component="nav">
 *       <Link to="/mails">
 *         <ListItem button>
 *           <ListItemIcon>
 *             <InboxIcon />
 *           </ListItemIcon>
 *           <ListItemText primary="Inbox" />
 *         </ListItem>
 *       </Link>
 *       <Link to="/compose">
 *         <ListItem button>
 *           <ListItemIcon>
 *             <DraftsIcon />
 *           </ListItemIcon>
 *           <ListItemText primary="Drafts" />
 *         </ListItem>
 *       </Link>
 *       <Link id="sent" to="/sent">
 *         <ListItem button>
 *            <ListItemIcon>
 *              <SendIcon />
 *            </ListItemIcon>
 *            <ListItemText inset primary={"Sent Mail ("+props.cont+")"} />
 *         </ListItem>
 *       </Link>
 *     </List>
 *   </div>
 *
 */
const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function SimpleList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        <Link to="/mails">
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
        </Link>
        <Link to="/compose">
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
        </Link>
        <Link id="sent" to="/sent">
          <ListItem button>
    	       <ListItemIcon>
    	         <SendIcon />
    	       </ListItemIcon>
    	       <ListItemText inset primary={"Sent Mail ("+props.cont+")"} />
    	    </ListItem>
        </Link>
      </List>
    </div>
  );
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleList);