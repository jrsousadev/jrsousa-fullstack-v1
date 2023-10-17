import React from 'react';
import { ToastContainer } from 'react-toastify';

const Wrapper = ({children}) => {
  return (
    <>
      {children}
      <ToastContainer/>
    </>
  );
};

export default Wrapper;