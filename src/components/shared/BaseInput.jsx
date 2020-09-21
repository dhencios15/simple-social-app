import React from 'react';
import classnames from 'classnames';
const BaseInput = ({ hasError = 'gray-400', register, ...otherProps }) => {
  return (
    <input
      autoComplete='new-password'
      className={classnames(
        `bg-white rounded border border-${hasError} focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-2 `
      )}
      ref={register}
      {...otherProps}
    />
  );
};

export default BaseInput;
