import PropTypes from 'prop-types'
import React, { Component } from 'react'


export class ImageBackground extends Component {
    static propTypes = {
        source: PropTypes.string.isRequired,
        backgroundSize: PropTypes.any,
        parallax: PropTypes.number,
        backgroundPosition: PropTypes.oneOfType( [
            PropTypes.string,
            PropTypes.number
        ] ),
        backgroundAttachment: PropTypes.string,
        backgroundRepeat: PropTypes.string,
        backgroundClip: PropTypes.string
    }

    static defaultProps = {
        
            source: null,
            backgroundSize: null,
            parallax: null,
            backgroundPosition: 'center',
            backgroundAttachment: null,
            backgroundRepeat: 'repeat'
        
    }

    render () {
        const {
            children,
            source,
            backgroundSize,
            parallax,
            backgroundPosition,
            backgroundAttachment,
            backgroundRepeat,
            backgroundClip
        } = this.props

        const style = {
          
            backgroundImage: `url(${ source })`,
            backgroundSize: backgroundSize,
            backgroundPosition: backgroundPosition,
            backgroundAttachment: backgroundAttachment,
            backgroundRepeat: backgroundRepeat,
            transitionDuration: '0ms',
            transitionTimingFunction: 'none',
            backgroundClip: backgroundClip
        }

        return (
            <div
                data-from={ 'ImageBackground' }
                data-parallax={ parallax }
                style={ style }
            >
                { children }
            </div>
        )
    }
}
