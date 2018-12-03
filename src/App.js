import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common'
import firebase from '@firebase/app';
import LoginForm from './components/LoginForm';
//firebase is an online database that will connect directly to your app. Notifies changes done by other users.
//it isn't only about moving data but also used for analytics and authentication


class App extends Component {
    //lifecycle methods are methods that will automatically invoked such as this
    //we do this before the render
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBzi-WKtIW76Zew4AjkBEm16RsBij8J77I',
            authDomain: 'authentication-2ce32.firebaseapp.com',
            databaseURL: 'https://authentication-2ce32.firebaseio.com',
            projectId: 'authentication-2ce32',
            storageBucket: 'authentication-2ce32.appspot.com',
            messagingSenderId: '1032644992444'
            // apiKey: "AIzaSyD6WKr4nBqVaGpVhjBEQ2v1FEDqWuLheko",
            // authDomain: "letscodescv-5dbc0.firebaseapp.com",
            // databaseURL: "https://letscodescv-5dbc0.firebaseio.com",
            // projectId: "letscodescv-5dbc0",
            // storageBucket: "letscodescv-5dbc0.appspot.com",
            // messagingSenderId: "313319506594"
            });
    }
    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        )
    }
};

console.log("hello")
export default App;