import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Home from '../Page/Home';
import  Login  from '../Page/Login';
import  MainMenu  from '../Page/MainMenu';


const Stack = createStackNavigator();
export default class router extends Component {

    render() {
        return (
            <Stack.Navigator >
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="MainMenu" component={MainMenu}/>
            </Stack.Navigator>
        )
    }
}

export default router