import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { 
        email: '',
        password: ''
        // text: ''
    };
    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Email"
                        placeholder="user@gmail.com"
                        value={this.state.email}
                        onChangeText={(email)=> this.setState({ email })}
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

                <CardSection>
                    <Button>
                        Log In!
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

//the video asks for height of 20, but it doesn't show text because of it.
//So we DOUBLED IT! AND IT WORKS!


export default LoginForm;