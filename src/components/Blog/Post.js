import React from 'react';
import moment from 'moment';

const Post = ({ post }) => {

    const { title, date, text } = post;

    console.log(date);


    return <div className='Post'>
        <h2>{ title }</h2>
        <p>{ text }</p>
        <span>{ moment(date, 'x').format('LLLL') }</span>
    </div>;

};

export default Post;
