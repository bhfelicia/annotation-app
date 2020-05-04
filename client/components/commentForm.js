import React from "react";
import { createComment } from "../store/comment";
import { connect } from "react-redux";

export class CommentForm extends React.Component {
  constructor() {
    super();
    this.state = {
      comment: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createComment(this.state.comment);
    this.setState({ comment: "" });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="field"
          type="text"
          name="comment"
          onChange={this.handleChange}
          value={this.state.comment}
        />
        <br />
        <button type="submit" className="button">
          Submit Comment
        </button>
      </form>
    );
  }
}

const mapDispatch = dispatch => {
  return {
    createComment: comment => dispatch(createComment(comment))
  };
};

export default connect(null, mapDispatch)(CommentForm);
