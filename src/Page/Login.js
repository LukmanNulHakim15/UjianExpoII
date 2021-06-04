import axios from 'axios'
import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import { connect } from 'react-redux'
import { LoginAction } from '../Redux/Action'


export class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            username:"",
            phone:""
        }
    }

    handleLogin(){
        axios.get('http://e1e202606dab.ngrok.io/register/login/',{
            params:{
                username:this.state.username,
                phone:this.state.phone,
            }
        })
        .then((response)=>{
            let data = response.data
           console.log(data)
           if ( data !== ""){
               this.props.LoginAction(true,"isLogin")
               this.props.LoginAction(data,"dataUser")   
               alert("Login Berhasil")
               this.props.navigation.navigate("MainMenu")
           }else{
            alert("Username atau Phone anda salah, silahkan login kembali")
            this.props.LoginAction(false,"isLogin")
           }
        })              
             .catch((err)=>{
                console.log(err)
            })
    }

    render() {
        return (
            <View>
               <Text> Name </Text>
                <TextInput
                style={styles.input}
                onChangeText={(data)=>{this.setState({username:data})}}
                placeholder="Username"
                />

                <Text> Phone </Text>
                <TextInput
                style={styles.input}
                onChangeText={(data)=>{this.setState({phone:data})}}
                placeholder="Phone"
                />

                {/* <TouchableOpacity style={styles.button} onPress={this.AddRegister.bind(this)}><Text style={styles.title}>Registrasi</Text></TouchableOpacity> */}
                <TouchableOpacity style={styles.button} onPress={()=>{this.handleLogin()}}><Text style={styles.title}>Login</Text></TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    dataMapping:state.LoginReducer
})

const mapDispatchToProps = {
    LoginAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
      },

      button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
      },
});