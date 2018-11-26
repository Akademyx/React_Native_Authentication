import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
//TouchableOpacity or anything touchable is a button

const Button = ({ onPress, children }) => {
    const {
        buttonStyle,
        textStyle
    } = styles;
    //the touchable opacity should always be hooked to an onPress
    //props.onPress gets passed down from albumdetails and then deconstructed
    return (
        <TouchableOpacity onPress={(onPress)} style={buttonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
};

//We can export the button by saying export { Button: Button }... and then
//shorten it down so that it is only Button
export { Button };
