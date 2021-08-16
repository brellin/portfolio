import React from 'react';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

const Post = ({ post: { title, date, id } }) => {

    const { push } = useHistory();

    return <div className='Post' onClick={ _ => push(`blog/post/${ id }`) }>
        <h2>{ title }</h2>
        <span>{ moment(date, 'x').format('LLLL') }</span>
    </div>;

};

export default Post;
