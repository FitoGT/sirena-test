import React from 'react';
import Typography from '@material-ui/core/Typography';

function SingleValue(props) {
  return (
    <Typography {...props.innerProps} style={{fontSize: 16,}}>
      {props.children}
    </Typography>
  );
}

export default SingleValue;