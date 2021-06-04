import React, { Component } from 'react'
import {  View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native'
import React, { Component } from 'react'

import { connect } from 'react-redux'

 class Home extends Component {
     constructor(props){
         super(props)
     }

     seasionLogin (){
        //tahap 2
        if (this.props.isLogin){
            this.props.navigation.navigate("MainMenu")
        }else {
            this.props.navigation.navigate("Login")
        }
     }

    render() {
        return (
            <View>
                 <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', }}>
                <Image style={styles.stretch} source={require('../Chip.png')}/>
                <TouchableOpacity style={styles.button} onPress={()=>{this.seasionLogin()}}><Text style={styles.title}>Login</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("Register")}}><Text style={styles.title}>Register</Text></TouchableOpacity>
            </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    isLogin:state.LoginReducer.isLogin
    // tahap 1
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)



const styles = StyleSheet.create({
    stretch: {
        width: 230,
        height: 200,
        resizeMode: 'stretch',
      },
      text:{
        textAlign:'center',
        borderWidth:5,
    },
        
      button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        marginVertical: 20,
        height: 50,
        width: 150
      },
    
    });
    




