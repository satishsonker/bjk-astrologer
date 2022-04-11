import React from 'react'

const GoogleLoginConfig=React.createContext();

const GoogleLoginProvider=GoogleLoginConfig.Provider;
const GoogleLoginConsumer=GoogleLoginConfig.Consumer;

export {GoogleLoginConsumer,GoogleLoginProvider}