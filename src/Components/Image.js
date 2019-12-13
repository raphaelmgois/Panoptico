import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Image extends Component {
    static propTypes = {
        source: PropTypes.string.isRequired,
        borderRadius: PropTypes.oneOfType( [ PropTypes.string, PropTypes.number ] ),
        round: PropTypes.any,
        height: PropTypes.oneOfType( [ PropTypes.string, PropTypes.number ] ),
        width: PropTypes.oneOfType( [ PropTypes.string, PropTypes.number ] )
    }

    static defaultProps = {
        borderRadius: null,
        width: '100%',
        height: '100%'

    }

    render () {
        const { source, round, width, height } = this.props

        const style = {

            display: 'inline-block',
            borderRadius: round ? '50%' : ( this.props.borderRadius || '0' ),
            width: width,
            height: height
        }

        return <img data-from={ 'Image' } src={ source } style={ style } alt={ 'image' } />
    }
}
