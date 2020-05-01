import React from 'react'
import SelectionHighlighter from 'react-highlight-selection'
import {text} from '../sampleText'

export default class PassageView extends React.Component {
  constructor() {
    super()
    this.selectionHandler = this.selectionHandler.bind(this)
  }
  selectionHandler(selection) {
    console.log(selection)
  }
  render() {
    return (
      <SelectionHighlighter
        text={text}
        selectionHandler={this.selectionHandler}
        customClass="custom-class"
      />
    )
  }
}
