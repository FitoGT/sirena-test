import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import {Link} from 'react-router-dom';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    float: 'right',
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

function ComposeButton(props) {
  const { classes } = props;
  return (
    <div>
      <Link to="/compose">
        <Button variant="fab" color="primary" aria-label="Add" className={classes.button}>
          <AddIcon />
        </Button>
      </Link>
    </div>
  );
}

ComposeButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComposeButton);