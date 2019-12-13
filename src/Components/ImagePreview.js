import React from 'react'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles/imagePreview.css'

export default class ImagePreview extends Component {

    ImagePreview.propTypes = {
	dataUri: PropTypes.string,
	isFullscreen: PropTypes.bool
}


    render () {
     const ImagePreview = ({ dataUri, isFullscreen }) => {
	let classNameFullscreen = isFullscreen
		? 'demo-image-preview-fullscreen'
		: ''

	return (
		<div className={'demo-image-preview ' + classNameFullscreen}>
			<img src={dataUri} />
		</div>
	)
}
}

