import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { comments: [], enableButton: false, };
  }

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
      this.handleChange();
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

  getComments() {
    fetch("http://localhost:3001/comments")
      .then((res) => res.json())
      .then(
        (result) => {
          var temp = new Array();
          result.map(function (comment, index) {
            temp.push({ id: comment.id, comment: comment.comment });
          });
          this.setState({
            comments: temp,
          });
        },
        (error) => {
          console.log(`Error ${error}`);
        }
      );
  }

  componentDidMount() {
    this.getComments();
  }

  componentDidUpdate() {
    this.getComments();
  }

  handleChange() {
      const comment = this.newText.value;
      if (comment !== '') {
        this.setState({enableButton: true});
      } else {
        this.setState({enableButton: false});
      } 
  }

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
      <div className="comment">
        <h1> Comentário</h1>
        <textarea className="textArea"
          ref={(comment) => {
            this.newText = comment;
          }}
          onChange={this.handleChange.bind(this)}
        />
        <button onClick={this.save.bind(this)} disabled={!this.state.enableButton}>Cadastrar</button>
        <button onClick={this.deleteAll.bind(this)}>Remover comentários</button>
        <ul>
          {this.state.comments.map(function (comment, index) {
            return (
              <li key={comment.id}>
                {comment.comment} ::
                <button onClick={() => showValue(comment.id)}>Exibir comentário</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Form;

// yarn start