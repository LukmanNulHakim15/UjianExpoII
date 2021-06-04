import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Store from './src/Redux/Store';
import Router from './src/router/Router';





 export class App extends Component {
  render() {
    return (
      <Provider store={Store}>
      <NavigationContainer>
       <Router></Router>
      </NavigationContainer>
      </Provider>
    )
  }
}

export default App
