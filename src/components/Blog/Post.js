import React from 'react';

const Post = ({ post }) => {

    console.log(post);

    const { title, date, text } = post;


    return <div className='Post'>
        <h1>{ title }</h1>
        <span>{ date }</span>
        <p>{ text }</p>
    </div>;

};

export default Post;
