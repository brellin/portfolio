import React from 'react';
import { useHistory } from 'react-router-dom';

import { momentize } from '../../assets';

const Post = ({ post: { title, date, id, edited } }) => {

    const { push } = useHistory();

    console.log(title, edited);

    return <div className='Post' onClick={ _ => push(`blog/post/${ id }`) }>
        <h2>{ title }</h2>
        <span>{ `Created ${ momentize(date) }${ edited ? ` (edited ${ momentize(edited) })` : '' }` }</span>
    </div>;

};

export default Post;
