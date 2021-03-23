import React from 'react';

// acts like global context to pass data
// reason -> props can be passed with chain 
// and skip for those that don't need it
// accepts default value in ctor
const authContext = React.createContext({
    authenticated: false,
    login: () => {}
});

export default authContext;