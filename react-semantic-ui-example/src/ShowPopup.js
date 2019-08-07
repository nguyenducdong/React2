import React from 'react';
import {
    Button,
    Modal
  } from 'semantic-ui-react';
const ShowPopup = ({opened, close}) => {
    return (
        <Modal open={opened} onClose={close} closeOnEscape={true} closeOnDimmerClick={true}>
        <Modal.Header>Delete Your Account</Modal.Header>
            <Modal.Content>
                <p>Are you sure you want to delete your account?</p>
           </Modal.Content>
            <Modal.Actions>
                <Button negative onClick={close}>NO</Button>
                <Button
                    onClick={close}
                    positive
                    labelPosition='left'
                    icon='checkmark'
                    content='Yes'/>
            </Modal.Actions>

        </Modal>    
    )
}

export default ShowPopup;