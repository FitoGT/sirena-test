import React from 'react';
import TextField from '@material-ui/core/TextField';
function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

function Control(props) {
  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          ref: props.innerRef,
          children: props.children,
          ...props.innerProps,
        },
      }}
      value=""
    />
  );
}

export default Control;