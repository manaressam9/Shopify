import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

function LoadingBox() {
  return (
    <Spinner className="Spinner-Color" animation="grow" role="status">
      <span className="visually-hidden"></span>
    </Spinner>
  );
}

export default LoadingBox;
