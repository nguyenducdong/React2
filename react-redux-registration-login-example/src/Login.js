import React from 'react'
import {Grid, Header, Segment, Form, Button, Message} from 'semantic-ui-react'

const Login = () => (
    <Grid centered columns={2}>
        <Grid.Column>
            <Header as='h2' textAlign="center">
                Login
            </Header>
            <Segment>
                <Form size='lagre'>
                    <Form.Input 
                        fluid
                        icon='user'
                        iconPosition='left'
                        placeholder='Email address'/>
                    
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='password'
                        type='password'/>
                    <Button color='blue' fluid size='large'>
                        Login
                    </Button>
                </Form>
            </Segment>
            <Message>
                Not registered yet? <a href="#">Sign Up</a>
            </Message>
        </Grid.Column>
    </Grid>
)

export default Login;