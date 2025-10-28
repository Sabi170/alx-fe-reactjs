import React from "react";

import { AuthContext } from '../App';

const useAuth = () => {
    return React.useContext(AuthContext);
};

export default useAuth;