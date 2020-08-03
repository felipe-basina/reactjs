import React, { Component } from "react";
import CommentItem from "./CommentItem";

class CommentList extends Component {
  render() {
    return (
      <div className="commentList">
        {this.props.comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
    );
  }
}

export default CommentList;
