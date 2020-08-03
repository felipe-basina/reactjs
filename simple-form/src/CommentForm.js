import React, { Component } from "react";

class CommentForm extends Component {
  state = {
    enableButton: false,
  };

  save() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comment: this.newText.value }),
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
    this.newText.value = "";
    this.handleChange();
  }

  handleChange() {
    const comment = this.newText.value;
    if (comment !== "") {
      this.setState({ enableButton: true });
    } else {
      this.setState({ enableButton: false });
    }
  }

  render() {
    const { enableButton } = this.state;
    return (
      <div className="comment">
        <h1> Comentário</h1>
        <textarea
          className="textArea"
          ref={(comment) => {
            this.newText = comment;
          }}
          onChange={this.handleChange.bind(this)}
        />
        <div>
          <button onClick={this.save.bind(this)} disabled={!enableButton} className="commentActions">
            Cadastrar
          </button>
        </div>
      </div>
    );
  }
}

export default CommentForm;