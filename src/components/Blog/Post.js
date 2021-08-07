import React from 'react';

const Post = ({ text, date, title }) => {

    return <div className='Post'>
        <h1>{ title }</h1>
        <span>{ date }</span>
        <p>{ text }</p>
    </div>;

};

export default Post;
