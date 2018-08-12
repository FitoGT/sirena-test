import React from 'react';
function ValueContainer(props) {
  return <div style={{display: 'flex', flex: 1, alignItems: 'center', }}>{props.children}</div>;
}

export default ValueContainer;