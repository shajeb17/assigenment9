import React, { use } from 'react';
import { AuthContext } from '../uesContextHook/formhook/AuthContex';
import { Navigate } from 'react-router';

const PrivateRouter = ({childern}) => {
    let {userInfo,loading}=use(AuthContext)
    if(loading){return}
    if(userInfo){return childern}
    return <Navigate></Navigate>;
};

export default PrivateRouter;