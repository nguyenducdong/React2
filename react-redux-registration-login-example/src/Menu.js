import React from 'react'
import {Menu, Container, Image} from 'semantic-ui-react'
import logo from './logo.svg'

const MenuNav = () => (
    <Menu>
        <Container>
            <Menu.Menu position='left'>
                <Menu.Item as='a' href='http://google.com' header>
                    DONGND
                </Menu.Item>
            </Menu.Menu>
            <Menu.Menu position='right'>
                <Menu.Item as='a' href='http://google.com'>
                    Login
                </Menu.Item>
                <Menu.Item as='a' href=''>
                    Register
                </Menu.Item>
            </Menu.Menu>
        </Container>
    </Menu>
)

export default MenuNav;