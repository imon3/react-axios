import React, { Component } from 'react';
import axios from 'axios';
import Post from './Post';

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h2 className='posts'>Posts</h2>
        {this.state.posts.map(post => {
          const { id, title } = post;
          return (
            <div className='post-title' key={id}>
              <Post post={post} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Posts;
