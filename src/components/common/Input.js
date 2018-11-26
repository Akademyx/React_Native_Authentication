import React from 'react';
import { TextInput, View, Text } from 'react-native';

//label is a prop
const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput 
                // secureTextEntry={true}
                secureTextEntry={secureTextEntry}
                autoCorrect={false}
                //stops auto correction on ios
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                style={inputStyle}
            />
        </View>
    )
};

const styles = {
//one for container, an input, and a label
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        //lineheight is the spacing between each line of text
        //flex takes place of width
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
        //flex proportions (allocates) spacing to each child nodes between 
        //text and TextInput, so this is a 1/3 where as input style is 2/3
    },
    containerStyle: {
        height: 40,
        // width: 100,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
}

export { Input };