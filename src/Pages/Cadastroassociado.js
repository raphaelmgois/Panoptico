import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CameraStart from '../Components/CameraStart'
import FormAssociados from '../Components/FormAssociados'
import NavBar from '../Components/NavBar'
import { Col, Row, Container, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class Cadastroassociado extends Component {
    render () {
        const ButtonStyle = {
            width: '100%',
            height: '40px',
            fontSIze: '15px',
            textAlign: 'center'
        }
        return (
            <Container>
                <Row className='justify-content-md-center'>
                    <Col xl='12'>
                        <NavBar />
                    </Col>
                </Row>

                <Row className='justify-content-md-center'>
                    <Col md='12'>
                        <FormAssociados />
                    </Col>
                </Row>

                <Row>
                    <Col md='12'>
                        <CameraStart />
                    </Col>
                </Row>

                <Row>
                    <Col md='12'>
                        <Button
                            style={ ButtonStyle }
                            variant='primary'
                            type='submit'>
                            Cadastrar
						</Button>
                        <hr></hr>
                    </Col>
                </Row>
            </Container>

            // <Container>

            // </Container>
        )
    }
}

// Do stuff with the dataUri photo...
