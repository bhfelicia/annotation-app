import React from 'react'
import NewHighlight from './newHighlight'
import CommentForm from './commentForm'
import {text} from '../sampleText'
let newText = text.split('\n').map((item, i) => {
  return <p key={i}>{item}</p>
})
// import dataBase from '../../public/ind'

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
      <div>
      <NewHighlight
        text={newText}
        selectionHandler={this.selectionHandler}
        customClass="custom-class"
      />
      <CommentForm />
      </div>
    )
  }
}
