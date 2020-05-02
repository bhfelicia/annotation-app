import React, {Component} from 'react'

function highlight(str, start, length) {
  const partial = [str.slice(start, (start + length))]
  const strArr = str.split('')
  strArr.splice(start, length, `<div className="${this.props.customClass}">${partial}</div>`)
  return strArr.join('')
}

export default class NewHighlighter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: props.text,
      selection: '',
      // anchorNode:'?',
      // focusNode: '?',
      selectionStart: '?',
      selectionEnd: '?',
    }
    this.onMouseUpHandler = this.onMouseUpHandler.bind(this)
    this.highlight = this.highlight.bind(this)
  }

  highlight(str, start, length) {
    const partial = [str.slice(start, (start + length))]
    const strArr = str.split('')
    strArr.splice(start, length, `<div className="${this.props.customClass}">${partial}</div>`)
    return strArr.join('')
  }
  onMouseUpHandler(evt) {
    evt.preventDefault()
    const selectionObj = (window.getSelection && window.getSelection());
    const selection = selectionObj.toString();
    // const anchorNode = selectionObj.anchorNode;
    // const focusNode = selectionObj.focusNode;
    const anchorOffset = selectionObj.anchorOffset;
    // const focusOffset = selectionObj.focusOffset;
    // const position = anchorNode.compareDocumentPosition(focusNode);
    // let forward = false;

    // if (position === anchorNode.DOCUMENT_POSITION_FOLLOWING) {
    //     forward = true;
    // } else if (position === 0) {
    //     forward = (focusOffset - anchorOffset) > 0;
    // }

    let selectionStart = anchorOffset


    // if (forward) {
    //     if (anchorNode.parentNode.getAttribute('data-order')
    //         && anchorNode.parentNode.getAttribute('data-order') === 'middle') {
            selectionStart += this.state.selectionStart;
    //     }
    //     if (anchorNode.parentNode.getAttribute('data-order')
    //         && anchorNode.parentNode.getAttribute('data-order') === 'last') {
    //         selectionStart += this.state.selectionEnd;
    //     }
    // } else {
    //     if (focusNode.parentNode.getAttribute('data-order')
    //         && focusNode.parentNode.getAttribute('data-order') === 'middle') {
    //         selectionStart += this.state.selectionStart;
    //     }
    //     if (focusNode.parentNode.getAttribute('data-order')
    //         && focusNode.parentNode.getAttribute('data-order') === 'last') {
    //         selectionStart += this.state.selectionEnd;
    //     }
    // }

    const selectionEnd = selectionStart + selection.length;
    document.getElementById("para").innerHTML = highlight(document.getElementById("para").innerHTML, selectionStart, selection.length)
  }
  render() {
    // if (!this.state.selection) {
        return (
            <span
                onMouseUp={this.onMouseUpHandler}><div id="para">{this.state.text}</div>
            </span>
        )
    // } else {
    //     return (
    //         <span
    //             onMouseUp={this.onMouseUpHandler}>
    //             <span
    //                 data-order="first" >
    //                 {this.state.first}
    //             </span>
    //             <span
    //                 data-order="middle"
    //                 className={this.props.customClass || "default"}>
    //                 {this.state.middle}
    //             </span>
    //             <span
    //                 data-order="last">
    //                 {this.state.last}
    //             </span>
    //         </span>
        // )
    // }
  }
}
