import React from 'react'

export default class Comment extends React.Component{
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const comment = this.props.comment
    return (
      <div className="comment">
        <p>{comment}</p>
      </div>
    )
  }
}
