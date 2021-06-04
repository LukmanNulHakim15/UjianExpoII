import axios from 'axios';
import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, onChangeText, TouchableOpacity } from 'react-native'

 class Register extends Component {
     
    constructor(props){
        super(props);
        this.state={
            username:"",
            jenisKelamin:"",
            phone:"",
            umur:"",
            gambar:""
        }

    }
    AddRegister() {
        axios.post('')
        .then((response)=> {
            alert(response.data)    
        })
        .catch((error)=>{
            console.log("Eror bro, cek lagi" + error)
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

                <Text> Jenis Kelamin </Text>
                <TextInput
                style={styles.input}
                onChangeText={(data)=>{this.setState({jenisKelamin:data})}}
                placeholder="JenisKelamin"
                />

                <Text> Phone </Text>
                <TextInput
                style={styles.input}
                onChangeText={(data)=>{this.setState({phone:data})}}
                placeholder="Phone"
                />

                <Text> umur </Text> 
                <TextInput
                style={styles.input}    
                onChangeText={(data)=>{this.setState({umur:data})}}
                placeholder="Umur"
                />

                <TouchableOpacity style={styles.button} onPress={this.AddRegister.bind(this)}><Text style={styles.title}>Registrasi</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("Login")}}><Text style={styles.title}>Home</Text></TouchableOpacity>
            </View>
        )
    }
}

export default Register;

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