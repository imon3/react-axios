import React, { Component } from 'react';
import axios from 'axios';

class AllComments extends Component {
  constructor() {
    super();
    this.state = {
      allComments: []
    };
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h2>All Comments</h2>
      </div>
    );
  }
}

export default AllComments;
