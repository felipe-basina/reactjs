import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { comments: [] };
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
    this.componentDidMount();
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

  render() {
    function showValue(id) {
      fetch(`http://localhost:3001/comments/${id}`)
        .then((res) => res.json())
        .then(
          (result) => {
            console.log(result);
          },
          (error) => {
            console.log(`Error ${error}`);
          }
        );
    }

    return (
      <div className="comment">
        <h1> Comentários</h1>
        <textarea
          ref={(comment) => {
            this.newText = comment;
          }}
        />
        <button onClick={this.save.bind(this)}>Save</button>
        <ul>
          {this.state.comments.map(function (comment, index) {
            return (
              <li key={comment.id}>
                {comment.comment} ::
                <button onClick={() => showValue(comment.id)}>Print</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Form;