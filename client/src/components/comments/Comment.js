import React from 'react';

const Comment = props => {
  const { name, email, body } = props.comment;

  return (
    <div className='comment-container'>
      <div>
        <h3 className='comment-name'>{name}</h3>
        <p className='comment-email'>{email}</p>
      </div>
      <p className='comment=body'>{body}</p>
    </div>
  );
};

export default Comment;
