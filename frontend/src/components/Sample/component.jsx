import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { StyledP, StyledInput } from './style';

export default function Sample({ name }) {
  const [myName, setMyName] = useState(name);
  
  return <StyledP>My name is <StyledInput value={myName} onChange={(e) => setMyName(e.target.value)} />.</StyledP>
}

Sample.propType = {
  name: PropTypes.string,
}
Sample.defaultProps = {
  name: 'user'
}