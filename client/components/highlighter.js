import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import highlightStore, {getHighlighted} from '../store/highlight'

const propTypes = {
    text: PropTypes.string.isRequired,
    customClass: PropTypes.string,
    selectionHandler: PropTypes.func
};
let prevHighlights = []
/**
 * Highlighter component.
 *
 * Allows highlighting of the text selected by mouse with given custom class (or default)
 * and calls optional callback function with the following selection details:
 * - selected text
 * - selection start index
 * - selection end index
 */
export class Highlighter extends Component {
    constructor(props) {
        super(props);
        this.state = highlightStore.getState()
        console.log('constructor state: ', this.state)
        // {
        //     text: props.text,
        //     selection: '',
        //     anchorNode: '?',
        //     focusNode: '?',
        //     selectionStart: '?',
        //     selectionEnd: '?',
        //     first: '',
        //     middle: '',
        //     last: ''
        // };
        this.onMouseUpHandler = this.onMouseUpHandler.bind(this);
    }
    componentDidMount() {
        // this.unsubscribe = highlightStore.subscribe(() => this.setState(highlightStore.getState()))
                    this.props.getHighlighted(this.state)

    }

    // componentWillUnmount() {
    //     this.unsubscribe()
    // }
    onMouseUpHandler(e) {
        e.preventDefault();
        const selectionObj = (window.getSelection && window.getSelection());
        const selection = selectionObj.toString();
        console.log('within onMouse handler, selectionObj: ', selectionObj)
        const anchorNode = selectionObj.anchorNode;
        const focusNode = selectionObj.focusNode;
        const anchorOffset = selectionObj.anchorOffset;
        const focusOffset = selectionObj.focusOffset;
        const position = anchorNode.compareDocumentPosition(focusNode);
        let forward = false;
        if (position === anchorNode.DOCUMENT_POSITION_FOLLOWING) {
            forward = true;
        } else if (position === 0) {
            forward = (focusOffset - anchorOffset) > 0;
        }

        let selectionStart = forward ? anchorOffset : focusOffset;

        if (forward) {
            if (anchorNode.parentNode.getAttribute('data-order')
                && anchorNode.parentNode.getAttribute('data-order') === 'middle') {
                    console.log('first conditional')
                selectionStart += this.state.selectionStart;
            }
            if (anchorNode.parentNode.getAttribute('data-order')
                && anchorNode.parentNode.getAttribute('data-order') === 'last') {
                    console.log('in conditional checking if the data order type is last')
                selectionStart += this.state.selectionEnd;
            }
        } else {
            if (focusNode.parentNode.getAttribute('data-order')
                && focusNode.parentNode.getAttribute('data-order') === 'middle') {
                    console.log('selection state at first is: ', selectionStart)
                selectionStart += this.state.selectionStart;
                console.log("selectionStart after adding to state selectionStart: ", selectionStart)
            }
            if (focusNode.parentNode.getAttribute('data-order')
                && focusNode.parentNode.getAttribute('data-order') === 'last') {
                selectionStart += this.state.selectionEnd;
            }
        }

        const selectionEnd = selectionStart + selection.length;
        const first = this.state.text.slice(0, selectionStart);
        const middle = this.state.text.slice(selectionStart, selectionEnd);
        const last = this.state.text.slice(selectionEnd);
        console.log('state before setting state: ', this.state)
        this.setState({
            selection,
            anchorNode,
            focusNode,
            selectionStart,
            selectionEnd,
            first,
            middle,
            last
        });
        // const selected = {
        //         selection,
        //         anchorNode,
        //         focusNode,
        //         selectionStart,
        //         selectionEnd,
        //         first,
        //         middle,
        //         last
        //     }
            // this.props.getHighlighted(selected)
        console.log('state after setting state: ', this.state)
        if (this.props.selectionHandler) {
            this.props.selectionHandler({
                selection,
                selectionStart,
                selectionEnd
            });
        }
        console.log('state after selectionHandler: ', this.state)
        prevHighlights.push({selection, selectionStart, selectionEnd})
    }

    render() {
        if (!this.state.selection) {
            return (
                <span
                    onMouseUp={this.onMouseUpHandler}>{this.state.text}
                </span>
            )
        } else {
            return (
                <div>
                <span
                    onMouseUp={this.onMouseUpHandler}>
                    <span
                        data-order="first" >
                        {this.state.first}
                    </span>
                    <span
                        data-order="middle"
                        className={this.props.customClass || "default"}>
                        {this.state.middle}
                    </span>
                    <span
                        data-order="last">
                        {this.state.last}
                    </span>
                </span>
                                <div>
                                {console.log(this.state)}
                            </div>
                            </div>
            )
        }

    }
}

Highlighter.propTypes = propTypes;

const mapState = state => {
    return {
        selected: state.selected
    }
}

const mapDispatch = dispatch => ({
    getHighlighted: selected => dispatch(getHighlighted(selected))
})

export default connect(mapState, mapDispatch)(Highlighter)
