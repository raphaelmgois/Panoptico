import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

export default class NavBar extends Component {
	render() {
		return (
			<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
				<Navbar.Brand href='#home'>Logo aqui</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='mr-auto'>
						<Nav.Link href='#features'>Cadastrar</Nav.Link>
						<Nav.Link href='#pricing'>Preço</Nav.Link>
						<NavDropdown
							title='Dropdown'
							id='collasible-nav-dropdown'>
							<NavDropdown.Item href='#action/3.1'>
								Home
							</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.2'>
								Another action
							</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.3'>
								Action
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href='#action/3.4'>
								Link
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Nav>
						<Nav.Link href='#deets'>More deets</Nav.Link>
						<Nav.Link eventKey={2} href='#memes'>
							Texto Link
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		)
	}
}
