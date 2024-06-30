import React, { useState } from 'react';
import { Container, TextField, Button } from '@material-ui/core';
import UniversitySignupRahil from './UniversitySignupRahil';
import UniversitySignInRahil from './UniversitySignInRahil';

const UniversityAuth = ({connect, ifUniLogin}) => {
  
  return (
    <div>
      {(ifUniLogin) ? (<UniversitySignupRahil/>) : (<UniversitySignInRahil connect={connect} />)}
    </div>
  );
};

export default UniversityAuth;