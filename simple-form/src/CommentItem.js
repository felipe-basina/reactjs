import React, { Component } from "react";
import CommentShow from "./CommentShow";

class CommentItem extends Component {
  render() {
    return (
      <li className="noStyleInBullet">
          <div className="containerItemFull">
            <div className="containerItem">
                {this.props.comment.comment}
            </div>
            <CommentShow comment={this.props.comment} />
          </div>
      </li>
    );
  }
}

export default CommentItem;