import React from 'react';

const LoadingErrorWrapper = (props) => {
  const { loading, error, children } = props;
  if (loading) {
    return (
      <h1> Still Loading </h1>
    );
  } else if (error) {
    return (
      <h1> {error || 'Something went wrong'} </h1>
    );
  } else {
    return (
      <div>
        {children}
      </div>
    );
  }
}

export default LoadingErrorWrapper;
