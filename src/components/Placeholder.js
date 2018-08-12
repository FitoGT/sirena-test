import React from 'react';
import Typography from '@material-ui/core/Typography';

function Placeholder(props) {
  return (
    <Typography
      color="textSecondary"
      style={{position: 'absolute',left: 2,fontSize: 16,}}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

export default Placeholder;