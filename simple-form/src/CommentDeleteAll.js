import React, { Component } from "react";

class CommentDeleteAll extends Component {

    deleteAll() {
        const requestOptions = {
          method: "DELETE",
        };
        fetch("http://localhost:3001/comments", requestOptions)
          .then((response) => response.json())
          .then(
            (result) => {
              console.log(result);
            },
            (error) => {
              console.log(`Error ${error}`);
            }
          );
      }

    render() {
        return (
            <div className="deleteAll">
                <button onClick={this.deleteAll.bind(this)} className="commentActions">Remover comentários</button>
            </div>
        );
    }

}

export default CommentDeleteAll;