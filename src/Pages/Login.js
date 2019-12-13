import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { panoptico } from '../Assets/Image/panoptico.jpeg';

export default class Login extends Component{

    static propTypes = {
        imageLogo: PropTypes.string,
       
    }

    static defaultProps = {      
        imageLogo: panoptico,       
    }

    render () {
        const {imageLogo} =this.props
        const LinkStyle = {
            width: '100%',
            // height: '60px',
            fontSIze: '22px',
            fontWeight: "bold",
            textAlign: 'center',
            marginBottom: "3px",
            backgroundColor: "#4b42b1",
            color: "#ffffff",
            padding: "15px",
            float:"right"
        }

        const midView = {
            marginTop:"3%"
        }
        return (
            <Container style={ midView } >
                <Row>
                    <Col md={ 12 } className='justify-content-md-center'>
                        <img src={ "https://i.vimeocdn.com/portrait/3695602_640x640" }
                        style={ { width: '100%', float: "right" } } alt={ "Login" } /></Col>
                </Row>
                <Row>
                    <Col md={ 12 } className='justify-content-md-center'>
                        <Form>
                            <Form.Group as={ Row } controlId="formHorizontalEmail">
                                <Form.Label column sm={ 2 }>
                                    Email
    </Form.Label>
                                <Col sm={ 10 }>
                                    <Form.Control type="email" placeholder="Email" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={ Row } controlId="formHorizontalPassword">
                                <Form.Label column sm={ 2 }>
                                    Password
    </Form.Label>
                                <Col sm={ 10 }>
                                    <Form.Control type="password" placeholder="Password" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={ Row }>
                                <Col sm={ { span: 10, offset: 2 } }>
                                    {/* <Button type="submit">Sign in</Button> */ }
                                    <Link style={ LinkStyle } to="/associado">Entrar</Link>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
       )
   }
}