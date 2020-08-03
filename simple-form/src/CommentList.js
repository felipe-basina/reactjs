import React, { Component } from "react";
import CommentItem from "./CommentItem";

class CommentList extends Component {
  render() {
    return (
        <div>
            <div>
                <h1 className="h1CommentList">Comentários</h1>
            </div>
            <div className="commentList">
                {this.props.comments.map((comment) => (
                <CommentItem key={comment.id} comment={comment} />
                ))}
            </div>
        </div>
    );
  }
}

export default CommentList;
