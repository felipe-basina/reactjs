import React, { Component } from "react";

class CommentShow extends Component {

    render() {
        function showValue(id) {
            console.log(id);
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

        return(
            <div className="commentShow">
                <button onClick={() => showValue(this.props.comment.id)}>
                    Exibir comentário
                </button>
            </div>
        );
    }

}

export default CommentShow;