import React from 'react';
import Typography from '@material-ui/core/Typography';
function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

export default NoOptionsMessage;