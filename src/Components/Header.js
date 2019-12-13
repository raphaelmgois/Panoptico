import leftPad from 'left-pad';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import defaultComponentBackground from '../Assets/Image/headerbg.jpg';
import defaultLogoImage from '../Assets/Image/logo.png';
import { ImageBackground } from '../Components/ImageBackground';

export default class Header extends Component {
    static propTypes = {    
        title: PropTypes.string,
        description: PropTypes.string,

        imageLogo: PropTypes.string,
        backgroundImage: PropTypes.string,
        backgroundColor: PropTypes.string,

        secondary: PropTypes.any,
        color: PropTypes.string
    }

    static defaultProps = {
        title: 'Minha Loja',
        description: 'Descrição da minha loja',
        imageLogo: defaultLogoImage,
        backgroundImage: null,
        backgroundColor: null,

        headerOrientation: 'horizontal',
        color: null,
        searchButtonClick: () => {
            console.log( 'searchButtonClick não implementado' )
        }
    }
    render () {

        let baseColor = this.props.secondary
            ? 'black'
            : 'blue'

        const {
            title,
            description,
            
            backgroundImage,
            backgroundColor,
            imageLogo,
            
            headerOrientation,

            color
        } = this.props
        let orientationVertical = headerOrientation === 'vertical'
        let backgroundHeader
        if ( backgroundImage != null ) {
            backgroundHeader = backgroundImage
        } else if ( backgroundImage == null && backgroundColor != null ) {
            backgroundHeader = backgroundColor
        } else if ( backgroundImage == null && backgroundColor == null ) {
            backgroundHeader = defaultComponentBackground
        }


        const getContainerTopStyle = () => {
            let style = {
                // display: 'flex',
                float:leftPad,
                justifyContent: 'space-evenly',
                width: '100%',
                marginTop:"6px"
            }

            if ( orientationVertical ) {
                style.flexDirection = 'column'
                style.height = '30vh'
                style.alignItems = 'center'
            } else {
                style.flexDirection = 'row'
            }

            return style
        }

        const getContainerBottomStyle = () => {
            let style = {
                width: '100%'
            }

            style.margin = orientationVertical ? '3% auto' : '0 auto'
            return style
        }


        const getLogoStyle = () => {
            let style = {
                
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '4px',
               
            }
            style.width = orientationVertical ? '25%' : '30%'
            style.borderWidth = 1
            style.borderStyle = 'solid'
            style.borderColor = `#ededed'`

            return style
        }


        const getTextContainerStyle = () => {
            let style = {
                textShadow: '2px 2px #000'
            }

            style.color = color

            if ( orientationVertical ) {
                style.width = '90%'
                style.textAlign = 'center'
                style.display = 'flex'
                style.flexDirection = 'column'
                style.justifyContent = 'space-evenly'
                style.height = '10vh'
            } else {
                style.width = '55%'
            }
            return style
        }

        const getTitleStyle = () => {
            return {
                fontWeight: '900',
                fontSize: '1.5em',
                
            }
        }

        const getSubTitleStyle = () => {
            return {
                fontWeight: '100',
                fontSize: '1.5em'
            }
        }
        
        const Wrapper = {
           
            width: '100%',
            minHeight: '200px',
            
        }

        const h2 = {
            width: "100%",
            color: 'white',
            fontWeight: 'bold',
            marginTop:"50px"

        }


        const h5 = {
            width: "100%",
            color: '#fff',
            fontSize: "13px",
            // textAlign: "right",
            // paddingRight: "3px"
        }

        const LinkStyle = {
            width: '40%',
            height: '80px',
            fontWeight: '900',
            fontSize: '1em',
            textAlign: 'center',
            marginTop:"6%",
            backgroundColor: "#007bff",
            color: "#ffffff",
            padding: "20px",
            
        }

        const divStyle = {
            width: '100%',
            height: '60px',
            fontWeight: '900',
            fontSize: '1em',
            textAlign: 'center',
            marginTop: "15%",          
            color: "#ffffff",
            

        }

        return (
            <div data-from={ 'Header' } style={ Wrapper }>
                <ImageBackground
                    // minHeight={ '500px' }
                    width={ '100%' }
                    backgroundSize={ '100%' }
                    source={ defaultComponentBackground }
                    parallax={ 50 }>
                    <Row style={ {  flexDirection: 'horizontal' } }>
                        <Col md='4' style={ [ getContainerTopStyle() ] }>
                            <div style={ [ getLogoStyle() ] }>
                                <img src={ imageLogo } alt={ title } style={ { border:'solid 5px #ffffff ',  margin:"20px"
, width: '87%' } } />
                            </div>
                        </Col>
                        <Col md='6'>
                            <div style={ [ getTextContainerStyle() ] }>
                                <div style={ {} [ getTitleStyle() ] }><h2 style={ h2 }>{ title }</h2></div>
                                <div style={ [ getSubTitleStyle() ] }><h5 style={ h5}>{ description }</h5></div>
                            </div>
                        </Col>
                        <Col md='2'>
                            
                            <div style={ divStyle}><Link style={ LinkStyle } to="/">[ X ]</Link></div>
                           
                        </Col>
                    </Row>
                   
                </ImageBackground>
            </div>



            // <div data-from={ 'Header' } style={ Wrapper }>
            //     <ImageBackground
            //         height={ '300px'}
            //         width={ '100%' }
            //         backgroundSize={ '100%' }
            //         source={ defaultComponentBackground }
            //         parallax={ 50 }
            //     >
            //         <div style={ { display: 'flex', flexDirection: 'column' } }>
            //             <div style={ [ getContainerTopStyle() ] }>
            //                 <div style={ [ getLogoStyle() ] }>
            //                     <img src={ imageLogo } alt={ title } style={ { width: '100%' } } />
            //                 </div>
            //                 <div style={ [ getTextContainerStyle() ] }>
            //                     <div style={ [ getTitleStyle() ] }>{ title }</div>
            //                     <div style={ [ getSubTitleStyle() ] }>{ description }</div>
            //                 </div>
            //             </div>                       
            //         </div>
            //         <h2 style={ h2 }>PANÓPTICO</h2>
            //         <h5 style={ h5 }>Seja bem vindo, { this.props.name }</h5>
            //     </ImageBackground>
            // </div>


        )
    }
}
