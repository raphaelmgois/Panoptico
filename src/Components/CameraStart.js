import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import Camera from 'react-html5-camera-photo'
import 'react-html5-camera-photo/build/css/index.css'

export default class cameraStart extends Component {
    constructor() {
        super()

        this.state = { isOpen: false }
        this.timeOutId = null

        this.onClickHandler = this.onClickHandler.bind( this )
        this.onBlurHandler = this.onBlurHandler.bind( this )
        this.onFocusHandler = this.onFocusHandler.bind( this )
        // super()
        this.state = {
            Snapshot: null,
            photoCollection: []
        }
    }
    onClickHandler () {
        this.setState( currentState => ( {
            isOpen: !currentState.isOpen
        } ) )
    }

    // We close the popover on the next tick by using setTimeout.
    // This is necessary because we need to first check if
    // another child of the element has received focus as
    // the blur event fires prior to the new focus event.
    onBlurHandler () {
        this.timeOutId = setTimeout( () => {
            this.setState( {
                isOpen: false
            } )
        } )
    }

    // If a child receives focus, do not close the popover.
    onFocusHandler () {
        clearTimeout( this.timeOutId )
    }
    static propTypes = {
        onClick: PropTypes.func,
        pressed: PropTypes.bool,
        disabled: PropTypes.bool,
        title: PropTypes.oneOfType( [ PropTypes.string, PropTypes.number ] ),
        isFullscreen: PropTypes.bool,
        photoCollection: PropTypes.array
    }

    static defaultProps = {
        width: 60,
        height: 20,
        title: '-Dropdown-Button-',
        onClick: () => {
            console.log( ' onClick' )
        }
    }

    onTakePhoto ( dataUri ) {
        let photos = this.state.photoCollection

        photos.push( <img src={ dataUri } alt={ 'snapshot' } /> )

        this.setState( { photoCollection: photos } )
    }

    onCameraStart ( stream ) {
        console.log( 'Camera start', stream )
    }

    onCameraStop () {
        console.log( 'Camera start' )
    }


    onClickHandler = e => {
        console.log( 'onclickHandler', e.target.pressed )
        this.setState( { pressed: !this.state.pressed } )
    }

    render () {
        const Icon = ( icon ) => {
           

            return (
              
                    <img src={ 'https://cdn.pixabay.com/photo/2016/10/08/18/34/camera-1724286_960_720.png' } style={ styleIcon } />
                    
               )

        }

        const styleIcon = {
            width: '50px',
            fontSIze: '15px',
            textAlign: 'center',
            marginBottom: "5px",
            marginRight: "10px",
            fontWeight:'bold'
        }

        const inner = {
            display: 'none',
            transition: '1s',
            padding: '12px 16px',
            zIndex: 999,
            backgroundColor: '#ff0000'
        }

        const ButtonStyle = {
            width: '100%',
            height: '68px',
            fontSIze: '15px',
            textAlign: 'center',
            marginBottom:"5px"
        }

        const show = {
            width: '100%',
            transition: '1s',
            minHeight: 80,
            display: 'block',
            backgroundColor: '#ededed',
            boxShadow:
                '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            padding: '10px 16px',
            zIndex: 9999
        }

        const renderImage = {
            marginTop: 10,
            boxShadow:
                '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
        }






        return (
            <div>
                <div onBlur={ this.onBlurHandler } onFocus={ this.onFocusHandler }>
                    <Button
                        style={ ButtonStyle }
                        onClick={ this.onClickHandler }
                        aria-haspopup='true'
                        aria-expanded={ this.state.isOpen }>
                        <Icon/>
                        Habilitar Câmera
					</Button>
                </div>
                <div
                    // onClick={disabled ? false : this.onClickHandler}
                    className='App'>
                    {/* <span style={capture}>Capturar</span> */ }
                    <div style={ this.state.pressed ? show : inner }>
                        { this.state.pressed ? (
                            <Camera

                                onTakePhoto={ photoCollection => {
                                    this.onTakePhoto( photoCollection )
                                } }
                                onCameraStart={ stream => {
                                    this.onCameraStart( stream )
                                } }
                                onCameraStop={ () => {
                                    this.onCameraStop()
                                } }
                                imageCompression={ 0.17 }

                                sizeFactor={ 1 }
                            />
                        ) : null }
                        {/* <Camera
						onTakePhoto={photoCollection => {
							this.onTakePhoto(photoCollection)
						}}
						onTakePhotoAnimationDone={photoCollection => {
							this.onTakePhotoAnimationDone(photoCollection)
						}}
						onCameraError={error => {
							this.onCameraError(error)
						}}
						idealFacingMode={FACING_MODES.ENVIRONMENT}
						idealResolution={{ width: 640, height: 480 }}
						imageType={IMAGE_TYPES.JPG}
						imageCompression={0.97}
						isMaxResolution={false}
						isImageMirror={false}
						isSilentMode={true}
						isDisplayStartCameraError={true}
						isFullscreen={true}
						sizeFactor={1}
						onCameraStart={stream => {
							this.onCameraStart(stream)
						}}
						onCameraStop={() => {
							this.onCameraStop()
						}}
					/> */}
                    </div>

                    <div style={ renderImage }>{ this.state.photoCollection }</div>
                </div>
            </div>
        )
    }
}

// Do stuff with the photoCollection photo...
