import React from "react";
import Comment from "./Comment";
import { connect } from "react-redux";

export const CommentList = props => {
  if (!props.commentList.length) {
    console.log("commentlist props :", props);
    return <div>Add a comment!</div>;
  } else {
    console.log("in CommentList conditional render");
    return (
      <ol>
        {props.commentList.map(elem => (
          <li key={elem.id}>
            <Comment comment={elem.comment} />
          </li>
        ))}
      </ol>
    );
  }
};
const mapState = state => {
  return { commentList: state.commentReducer.commentList };
};
export default connect(mapState)(CommentList);
