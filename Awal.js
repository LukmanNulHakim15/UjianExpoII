import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'

 class Awal extends Component {
    render() {
        return (
            <View>
                  <Button
                    style={styles.separator}
                    title="Buku"
                    color="#f194ff"
                    disabled
                    />

                <Button
                    style={styles.separator}
                    title="Peminjaman"
                    color="#f194ff"
                    disabled
                    />

                <Button
                    style={styles.separator}
                    title="List Buku"
                    color="#f194ff"
                    disabled
                    />
            </View>
        )
    }
}

export default Awal;

const styles = StyleSheet.create({
    separator: {
        marginVertical: 20,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
});