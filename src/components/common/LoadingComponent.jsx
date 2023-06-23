import PropTypes from 'prop-types';
import React from 'react';

import '../../styles/LoadingComponent.less';

function LoadingComponent(props) {
  const { message } = props;

  return <div className="message">{message}</div>;
}

export default LoadingComponent;

LoadingComponent.propTypes = {
  message: PropTypes.string.isRequired,
};
