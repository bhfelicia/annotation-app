import React from 'react'
import Comment from './Comment'
// import {connect} from 'react-redux'


export default class CommentForm extends React.Component {
  constructor() {
    super()
    this.state = {
      comment: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    console.log('inside handleChange, state is: ', this.state)
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit(evt) {
    evt.preventDefault()
    const formData = {
      comment: this.state.comment
    }
    this.setState(formData)
  }
  render() {
    console.log('state within render: ', this.state)
    if(this.state.formData) {
      return (
        <div>
        <Comment comment={this.state.comment} />
        </div>
      )
    } else {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="comment"
          onChange={this.handleChange}
          value={this.state.comment}
        />
        <button type="submit">Submit Comment</button>
      </form>
    )}
  }
}

// const mapState = state => {
//   return {comment: state.comment}
// }

