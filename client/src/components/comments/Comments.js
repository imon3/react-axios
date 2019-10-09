import React, { Component } from 'react';
import axios from 'axios';
import Comment from './Comment';

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: []
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then(res => {
        const comments = res.data;
        this.setState({
          ...this.state,
          comments
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h2>Comments</h2>
        {this.state.comments.map((comment, index) => {
          return <Comment key={index} comment={comment} />;
        })}
      </div>
    );
  }
}

export default Comments;
