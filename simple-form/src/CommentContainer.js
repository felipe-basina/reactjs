import React from "react";
import CommentForm from "./CommentForm";
import CommentDeleteAll from "./CommentDeleteAll";
import CommentList from "./CommentList";

class CommentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { comments: [] };
  }

  getComments() {
    fetch("http://localhost:3001/comments")
      .then((res) => res.json())
      .then(
        (result) => {
          var temp = [];
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
    return (
      <div className="mainContainer">
        <CommentForm />
        <CommentDeleteAll />
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}

export default CommentContainer;