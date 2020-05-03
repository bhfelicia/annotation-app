import React from 'react'
import {connect} from 'react-redux'

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
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit(evt) {
    evt.preventDefault()
    const formData = {
      comment: this.state.comment
    }
  }
  render() {
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
    )
  }
}
