import React from 'react'
import { useState } from 'react';
import UniversityPortalRahil from './UniversiyPortalRahil';
import UniversityAuth from './UniversityAuth';

const University = ({connect, ifUniLogin}) => {
const [isLogin, setisLogin] = useState(false)
  return (
    <div>
        {(isLogin) ? (<UniversityPortalRahil/>) : (<UniversityAuth connect={connect} ifUniLogin={ifUniLogin}/>)}
    </div>
  )
}

export default University