import React from 'react';
import { useHistory } from 'react-router-dom';

import { editedString } from '../../assets';

const Post = ({ post: { title, date, id, edited }, loading }) => {

    const { push } = useHistory();

    return <div
        className={ `Post${ loading ? ' Loading' : '' }` }
        onClick={ _ => push(`blog/post/${ id }`) }
    >
        <h2>{ title }</h2>
        <span>{ loading ? '' : editedString(date, edited) }</span>
    </div>;

};

export default Post;
