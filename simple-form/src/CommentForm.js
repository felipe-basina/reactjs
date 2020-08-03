import React, { Component } from "react";

class CommentForm extends Component {
  state = {
    enableButton: false,
  };

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
        <button onClick={this.save.bind(this)} disabled={!enableButton}>
          Cadastrar
        </button>
        <button onClick={this.deleteAll.bind(this)}>Remover comentários</button>
      </div>
    );
  }
}

export default CommentForm;