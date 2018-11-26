//Making a component header called albums
//Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

//Make a component
//props is coming from App, so it is passing down
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

//note that styling here uses camel casing over hyphens
const styles = {
    viewStyle: {
        //the view box sizing
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        paddingTop: 15,
        //use elevation to create the shadow border effect
        shadowColor: '#0000',
        elevation: 3,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};
//Make the component available to other parts of the app
//AppRegistry is only used in the main APP component, so don't use it here
export { Header };
