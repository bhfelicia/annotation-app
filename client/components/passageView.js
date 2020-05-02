import React from 'react'
// import SelectionHighlighter from 'react-highlight-selection'
// import Highlighter from './highlighter'
// import OtherHighlight from './otherHighlight'
import NewHighlight from './newHighlight'
import CommentForm from './commentForm'
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
      <NewHighlight
        text={text}
        selectionHandler={this.selectionHandler}
        customClass="custom-class"
      />
    )
  }
}
