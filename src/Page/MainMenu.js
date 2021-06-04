import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class MainMenu extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log(this.props.dataRedux)
    }
    render() {
        return (
            <View>
                <Text> prop </Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    dataRedux:state.LoginReducer 
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu)
