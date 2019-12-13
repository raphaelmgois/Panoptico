import Map from 'pigeon-maps'
import Overlay from 'pigeon-overlay'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class TheMap extends Component {

    static propTypes = {
        markers: PropTypes.array,
        center: PropTypes.oneOfType( [ PropTypes.array ] ),
        onMarkerPress: PropTypes.func
    }

    static defaultProps = {        
            markers: [],
            zoom: 8,
            backgroundColor: 'white',
            color: 'black',
            onMarkerPress: () => {
                console.log( 'onMarkerPress is not created' )
            }
        
    }

    onMarkerPressHandler ( marker ) {
        this.props.onMarkerPress( marker )
    }

    render () {
        const { markers, center, zoom, height } = this.props

        return (
            <Map
                zoomSnap={ false }
                twoFingerDrag={ true }
                twoFingerDragWarning={ null }
                dprs={ [ 1, 2, 4 ] }
                center={ center }
                zoom={ zoom }
                attribution={ false }
                height={ height }>
                { markers.map( marker => (
                    <Overlay
                        key={ 'marker_' + marker.key }
                        anchor={ marker.coords }
                        payload={ marker.name }>
                        <div
                            onClick={ () => {
                                this.onMarkerPressHandler( marker )
                            } }>
                            { marker.content }
                        </div>
                    </Overlay>
                ) ) }
            </Map>
        )
    }

}
