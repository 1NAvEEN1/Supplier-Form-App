import React from 'react'
import {Navigate, useLocation} from "react-router-dom"
import store from '../app/store';


const ProtectedRoute = ({children}) => {
    // const user = useSelector((state) => state.conference);
    let location = useLocation();

    let auth = store.getState().form.started;

    if(!auth) {
        return <Navigate to="/" state={{ from: location}} replace />
    }
 return children

};

export default ProtectedRoute;