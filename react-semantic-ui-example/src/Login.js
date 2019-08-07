import React from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  GridRow,
  GridColumn,
  Icon,
  Divider,
  Search,
  Image,
  Modal
} from 'semantic-ui-react';
import ShowPopup from './ShowPopup'

export default () => {



    // const [opened, setOpened] = React.useState(false);
    // const [closeOnEscape, setCloseOnEscape] = React.useState(false);
    // const [closeOnDimmerClick, setCloseOnDimmerClick] = React.useState(false);

    // const closeFunction = () => setOpened(false);

    // const closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    //     setCloseOnEscape(closeOnEscape);
    //     setCloseOnDimmerClick(closeOnDimmerClick);
    //     setOpened(true);
    // }


    // return (
    //     <div>
    //         <Button onClick={closeConfigShow(false, true)}>No Close on Escapse</Button>
    //         <Button onClick={closeConfigShow(false, false)}>On Dimmer Click</Button>

    //         <Modal 
    //             open={opened} 
    //             closeOnEscape={closeOnEscape} 
    //             closeOnDimmerClick={closeOnDimmerClick}
    //             onClose={closeFunction}>

    //             <Modal.Header>Delete Your Account</Modal.Header>
    //             <Modal.Content>
    //                 <p>Are you sure you want to delete your account?</p>
    //             </Modal.Content>
    //             <Modal.Actions>
    //                 <Button negative onClick={closeFunction}>NO</Button>
    //                 <Button
    //                     onClick={closeFunction}
    //                     positive
    //                     labelPosition='left'
    //                     icon='checkmark'
    //                     content='Yes'/>
    //             </Modal.Actions>

    //         </Modal>

    //     </div>
    // )

/*
<Modal trigger={<Button primary>Show Modal</Button>} basic>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='https://sharecloth.com/assets/vendor/semantic/examples/assets/images/wireframe/media-paragraph.png' />
      <Modal.Description>
        <Header>Default Profile Image</Header>
        <p>We've found the following gravatar image associated with your e-mail address.</p>
        <p>Is it okay to use this photo?</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
  */

const [opened, setOpened] = React.useState(false);

const close = () => setOpened(false);

const show = () => () => setOpened(true)



return(
    <div>
        <Grid centered columns={2}>
            <Grid.Column>
            <Header as="h2" textAlign="center">
                Login
            </Header>
            <Segment>
                <Form size="large">
                <Form.Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="Email address"
                />
                <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                />

                <Button color="blue" fluid size="large">
                    Login
                </Button>
                </Form>
            </Segment>
            <Message>
                Not registered yet?  <Button primary onClick={show()}>Sign Up</Button>
            </Message>
            </Grid.Column>
        </Grid>
        <div>
            <ShowPopup opened={opened} close={close}/>
        </div>
        
    </div>
)


};
