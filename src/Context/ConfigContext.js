import React from 'react'

const AppConfig=React.createContext();

const AppConfigProvider=AppConfig.Provider;
const AppConfigConsumer=AppConfig.Consumer;

export {AppConfigConsumer,AppConfigProvider}