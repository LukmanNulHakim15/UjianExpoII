import axios from 'axios';
import React, { Component } from 'react'
import { Text, View } from 'react-native'

 class Peminjaman extends Component {
     constructor (props){
         super(props);
         this.state={
             name:"",
             book:""
         }
     }

     AddPeminjam (){
         axios.post(' http://579468f008af.ngrok.io/peminjam/AddPeminjam/')
     }
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
export default Peminjaman;