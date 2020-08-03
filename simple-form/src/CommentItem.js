import React, { Component } from "react";

class CommentItem extends Component {
  render() {
    function showValue(id) {
      fetch(`http://localhost:3001/comments/${id}`)
        .then((res) => res.json())
        .then(
          (result) => {
            const comment = JSON.stringify(result);
            console.log(comment);
            alert(comment);
          },
          (error) => {
            console.log(`Error ${error}`);
          }
        );
    }

    return (
      <li className="noStyleInBullet">
        {this.props.comment.comment} ::
        <button onClick={() => showValue(this.props.comment.id)}>
          Exibir comentário
        </button>
      </li>
    );
  }
}

export default CommentItem;