import React from "react";
import NewHighlight from "./newHighlight";
import CommentForm from "./commentForm";
import CommentList from "./commentList";
import { text, title } from "../sampleText";
let newText = text.split("\n").map((item, i) => {
  return <p key={i + 1}>{item}</p>;
});

export default class PassageView extends React.Component {
  constructor() {
    super();
    this.selectionHandler = this.selectionHandler.bind(this);
  }
  selectionHandler(selection) {
    console.log(selection);
  }
  render() {
    return (
      <div>
        <NewHighlight
          text={newText}
          title={title}
          selectionHandler={this.selectionHandler}
          customClass="custom-class"
        />
        <CommentForm />
        <CommentList commentList={[]} />
      </div>
    );
  }
}
