import React, { Component } from "react";
let num = 0;
export default class NewHighlighter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
      title: props.title,
      selection: "",
      selectionStart: ""
    };
    this.onMouseUpHandler = this.onMouseUpHandler.bind(this);
    this.highlight = this.highlight.bind(this);
  }

  highlight(str, start, length) {
    num += 1;
    const partial = [str.slice(start, Number(start) + length)];
    const front = [`<span>${str.slice(0, start)}</span>`];
    const back = [`<span>${str.slice(Number(start) + length)}</span>`];
    const toInsert = `<span class=${
      this.props.customClass
    }>${partial}</span><sup>${num}</sup>`;
    return [front, back].join(toInsert);
  }
  onMouseUpHandler(evt) {
    evt.preventDefault();
    const selectionObj = window.getSelection();
    let anchorNode = selectionObj.anchorNode;
    const selection = selectionObj.toString();
    const anchorOffset = selectionObj.anchorOffset;
    let selectionStart = anchorOffset;
    selectionStart += this.state.selectionStart;

    if (this.props.selectionHandler) {
      this.props.selectionHandler({
        selection,
        selectionStart
      });
    }
    this.setState({ selection });
    anchorNode.parentNode.innerHTML = this.highlight(
      anchorNode.parentNode.innerHTML,
      selectionStart,
      selection.length
    );
  }
  render() {
    return (
      <span onMouseUp={this.onMouseUpHandler}>
        <div>
          <h1>{this.state.title}</h1>
          {this.state.text}
        </div>
      </span>
    );
  }
}
