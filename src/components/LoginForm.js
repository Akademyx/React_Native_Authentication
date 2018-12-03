import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';
import firebase from '@firebase/app';
import { Text } from 'react-native'

class LoginForm extends Component {
    state = { 
        email: '',
        password: '',
        // error: ''
        // text: ''
    };

    // const { errorTextStyle } = styles;

    onButtonPress() {
        //our call back method
        const { email, password } = this.state;
        //this pulls "state"
        // firebase.auth().signInWithEmailAndPassword(email, password);
        firebase.auth().signInWithEmailAndPassword(email,password)
        .catch(()=> {
            //if attempt fails, we create you an account
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .catch(()=> {
                    //this is an error the user catch case
                    this.setState({ error: 'Authentication Failed.' })
                });
        });
        //singin is a promise
    }


    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Email"
                        placeholder="user@gmail.com"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        //both of these are getting passed down into 
                        //child Input.js file as arguments
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        label="Password"
                        placeholder="*******"
                        secureTextEntry
                        //just listing it makes it true for secure
                        value={this.state.password}
                        onChangeText={(password)=> this.setState({password})}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text> 

                <CardSection>
                    {/* <Button > */}
                    <Button onPress={this.onButtonPress.bind(this)} >
                        Log In!
                    </Button>
                </CardSection>
            </Card>
        )
    };
}

//the video asks for height of 20, but it doesn't show text because of it.
//So we DOUBLED IT! AND IT WORKS!

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}


export default LoginForm;