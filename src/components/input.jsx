import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { spacing } from '../Theme'
import Text from './text'


export default function Input({label, placeholder, onChangeText, onBlur}) {
    return (
        <View style={{paddingVertical: spacing[3]}}>
            <Text  preset="subtitle" style={{paddingBottom: 10}}>{label}</Text>
            <TextInput 
                placeholder={placeholder}
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChangeText}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#CFCFCF',
        borderRadius: 8,
        padding: 15
    }
})