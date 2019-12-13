import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Button } from 'react-bootstrap'


export default class Localize extends Component {

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

    onClickHandler = e => {
        console.log( 'onclickHandler', e.target.pressed )
        this.setState( { pressed: !this.state.pressed } )
    }
 
    render () {

        const Icon = ( icon ) => {


            return (

                <img src={ 'https://icon-library.net/images/location-png-icon/location-png-icon-12.jpg' } style={ styleIcon } />

            )

        }

        const styleIcon = {
            width: '50px',
            fontSIze: '15px',
            textAlign: 'center',
            marginBottom: "5px",
            marginRight: "10px",
            fontWeight: 'bold'
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
            height: '66px',
            fontSIze: '15px',
            textAlign: 'center',
            backgroundColor: '#ffbf00',
            color:"#ffffff"
        }

        const show = {
            width: '100%',
            transition: '1s',
            minHeight: 80,
            display: 'block',
            backgroundColor: '#ededed',
            boxShadow:
                '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            padding: '16px 16px',
            zIndex: 9999
        }

        const imageStyle = {
            width: '100%',
           
        }

       
        return (
            <div>
                <div onBlur={ this.onBlurHandler } onFocus={ this.onFocusHandler }>
                    <Button
                        style={ ButtonStyle }
                        onClick={ this.onClickHandler }
                        aria-haspopup='true'
                        aria-expanded={ this.state.isOpen }>
                        <Icon/>Onde estou?
					</Button>
                </div>
                <div
                    // onClick={disabled ? false : this.onClickHandler}
                    className='App'>
                    {/* <span style={capture}>Capturar</span> */ }
                    <div style={ this.state.pressed ? show : inner }>
                        { this.state.pressed ? (
                            <div style={ imageStyle }><img style={ imageStyle} src={ 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Morro_dos_Prazeres_%28RJ%29_-_Map.png' } /></div>
                        ) : null }

                    </div>


                </div>

            </div>
        )
    }
}
