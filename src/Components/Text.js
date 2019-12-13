import PropTypes from "prop-types";
import React, { Component } from 'react';



export default class Text extends Component {
    static propTypes = {
        color: PropTypes.string,
        lineHeight: PropTypes.oneOfType( [ PropTypes.string, PropTypes.number ] ),
        fontSize: PropTypes.oneOfType( [ PropTypes.string, PropTypes.number ] ),
        fontWeight: PropTypes.oneOfType( [ PropTypes.string, PropTypes.number ] ),
        textAlign: PropTypes.oneOf( [
            "initial",
            "left",
            "center",
            "right",
            "justify"
        ] ),
        fontFamily: PropTypes.string,
        block: PropTypes.bool,
        textTransform: PropTypes.oneOf( [
            "initial",
            "capitalize",
            "uppercase",
            "lowercase",
            "unset"
        ] ),
        textDecoration: PropTypes.oneOf( [
            "normal",
            "underline",
            "line-through",
            "overline"
        ] )
    };

    static defaultProps = {

        color: 'blue',
        fontSize: 14,
        lineHeight: 1.2,
        fontFamily: 'ubuntu',
        fontWeight: 400,
        textAlign: "initial",
        block: null,
        textTransform: "initial",
        marginBottom: 10,
        textDecoration: "normal",
        selectable: false

    };

    getTextStyle = () => {
        const {
            color,
            lineHeight,
            fontSize,
            fontWeight,
            fontFamily,
            block,
            textTransform,
            textAlign,
            textDecoration
        } = this.props;

        return {
            display: block ? "block" : "inline",
            color: color,
            fontSize: fontSize,
            fontFamily: fontFamily,
            fontWeight: fontWeight,
            textTransform: textTransform,
            lineHeight: lineHeight,
            textAlign: textAlign,
            textDecoration: textDecoration
        };
    };

    selectableText = () => {
        return {
            WebkitTapHighlightColor: "transparent",
            WebkitUserSelect: "text",
            userSelect: "text"
        };
    };

    isSelectable = () => {
        const { selectable } = this.props;
        let isSelected = selectable
            ? this.selectableText
            : this.getNoSelectableText();
        return isSelected;
    };

    render () {
        let styles = {
            ...this.isSelectable(),
            ...this.getBaseStyle(),
            ...this.getTextStyle()
        };

        return (
            <span data-from={ "Text" } style={ styles }>
                { this.props.children }
            </span>
        );
    }
}
