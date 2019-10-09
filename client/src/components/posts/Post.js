import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Post extends Component {
  constructor(props) {
    super(props);
  }

  getComments = id => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=:${id}`)
      .then(res => {
        const comments = res.data;
        return comments;
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { id, title } = this.props.post;

    return (
      <div>
        <Link to={`/posts/comments/${id}`}>{title}</Link>
      </div>
    );
  }
}

export default Post;
