
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import beneficios from '../Assets/Image/beneficios.png';
import boleto from '../Assets/Image/boleto.png';
import postos from '../Assets/Image/fuel.jpg';
import reparos from '../Assets/Image/mecanico.png';
import oficinas from '../Assets/Image/oficinas.png';
import sinistro from '../Assets/Image/sinistro.png';
import CameraStart from '../Components/CameraStart';
import Header from '../Components/Header';
import Localize from '../Components/Localize';
export default class Associado extends Component {

    render () {        

        
        const Icon = (icon ) => {
         icon = icon.icon
            switch ( icon ) {
                
                case 'boleto':
                    icon = boleto                        
                    break
                
                case 'beneficios':
                    icon = beneficios
                    break
                
                case 'postos':
                    icon = postos
                    break
                
                case 'oficinas':
                    icon = oficinas
                    break
                
                case 'sinistro':
                    icon = sinistro
                    break
                
                case 'reparos':
                    icon = reparos
                    break
                
                default:
                    // icon =  "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                    icon = null
                    break
            }

            return (
                
                <div>
                    {/* <img src={ 'https://icons-for-free.com/iconfiles/png/512/facebook+like+like+button+icon-1320166593088405455.png' } style={ styleIcon } /> */ }
                    <img src={ icon } style={ styleIcon } />
                </div>)
            
        }

        const styleIcon = {
            width: '50px',
            fontSIze: '15px',
            textAlign: 'center',
            marginBottom: "3px"
        }
    

        const BlockButton = {
            width: '100%',
            height: '150px',
            fontSIze: '15px',
            fontWeight:400,
            textAlign: 'center',
            marginBottom: "3px",
            backgroundColor: "#ededed",
            color:"#010101"
        }


        const LinkStyle = {
            width: '40%',
            height: '60px',
            fontSIze: '18px',
            fontWeight: 400,
            textAlign: 'center',
            marginBottom: "3px",
            backgroundColor: "#4b42b1",
            color: "#ffffff",
            padding: "15px"
        }


       
        return (

            <Container>

                <Row className=''>
                    <Col md='12'>
                        <Header
                            title="Raphael Gois"
                            description="Associado desde 03 de Junho de 2019, às 10h."
                            searchButtonPlaceholder={ 'Busque o que quiser' }
                            searchButtonClick={ () => {
                                console.log( 'Header Search Button' )
                            } }

                            backgroundColor={ '#FFF' }
                            imageLogo={ 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNgTwahomP_lDR_7X4tv7lXyVYTbGtnSp2nrFGx8Zh5VgOsgmERQ&s' }
                            headerOrientation={ 'vertical' }
                            parallax={ 50 }
                            color={ '#FFF' }
                        />
                    </Col>
                </Row>


                <Row className='justify-content-md-center'>
                    <Col md='4'>
                        <Button style={ BlockButton }><Icon icon={ "boleto" } />2ª Via do Boleto</Button>
                    </Col>
                    <Col md='4'>
                        <Button style={ BlockButton }><Icon icon={ "beneficios"}/> Clube de Benefícios</Button>
                        
                    </Col>
                    <Col md='4'>
                        <Button style={ BlockButton }  ><Icon icon={ "postos" } />Postos de Gasolina</Button>
                    </Col>
                </Row>
                <Row className='justify-content-md-center'>
                    
                    <Col md='4'>
                        <Button style={ BlockButton }><Icon icon={ "oficinas" } />Oficinas parceiras</Button>
                        
                    </Col>
                    <Col md='4'>
                        <Button style={ BlockButton }><Icon icon={ "sinistro" } />Sinistro</Button>

                    </Col>
                    <Col md='4'>
                        <Button style={ BlockButton }><Icon icon={ "reparos" } />Acompanhar reparos</Button>
                    </Col>
                </Row>
                <Row >
                    <Col><hr /></Col>
                    

                </Row>
                <Row>
                    <Col md='12'>
                        <CameraStart style={ BlockButton } />
                    </Col>
                </Row>
                <Row>
                    <Col md='12'>
                        <Localize style={ BlockButton } />
                    </Col>
                </Row>

                <Row>
                    <Col md='12'>
                        <hr/>
                        {/* <Link style={ LinkStyle } to="/">Sair</Link> */}
                       
                    </Col>
                </Row>
            </Container>

            // <Container>

            // </Container>
        )
    }
}

// Do stuff with the dataUri photo...
