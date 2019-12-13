import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CameraStart from '../Components/CameraStart'

import { Col, Row, Container, Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class FormAssociado extends Component {
    render () {
        return (
            <Container>
                <Row className='justify-content-md-center'>
                    <Col md='12'>
                        <Form>
                            <Form.Group controlId='formGridAddress1'>
                                <Form.Label>Nome Completo</Form.Label>
                                <Form.Control placeholder='José da Silva' />
                            </Form.Group>
                            <Form.Group controlId='formGridAddress1'>
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control placeholder='nome@exemplo.com' />
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={ Col } controlId='formGridCity'>
                                    <Form.Label>Telefone(Fixo)</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Form.Group as={ Col } controlId='formGridZip'>
                                    <Form.Label>Celular</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={ Col } controlId='formGridState'>
                                    <Form.Label>Veículo</Form.Label>
                                    <Form.Control as='select'>
                                        <option>Selecione...</option>
                                        <option>Bicicleta Elétrica</option>
                                        <option>Moto</option>
                                        <option>Carro</option>
                                        <option>Caminhão</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={ Col } controlId='formGridCity'>
                                    <Form.Label>Documento</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Form.Group as={ Col } controlId='formGridZip'>
                                    <Form.Label>CRLV</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId='formGridAddress1'>
                                <Form.Label>Endereço</Form.Label>
                                <Form.Control placeholder='Rua Nova, 123' />
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={ Col } controlId='formGridCity'>
                                    <Form.Label>Cidade</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Form.Group as={ Col } controlId='formGridState'>
                                    <Form.Label>Estado</Form.Label>
                                    <Form.Control as='select'>
                                        <option>Escolha...</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={ Col } controlId='formGridZip'>
                                    <Form.Label>Cep</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group id='formGridCheckbox'>
                                <Form.Check type='checkbox' label='Concordo' />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                {/* <Row>
					<Col md='2'>
						<Button variant='primary' type='submit'>
							Cadastrar
						</Button>
					</Col>
					<Col md='2'>
						<CameraStart />
					</Col>
				</Row> */}
            </Container>
        )
    }
}

// Do stuff with the dataUri photo...
