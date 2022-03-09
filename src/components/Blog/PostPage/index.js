import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { axios, editedString } from '../../../assets';

import './pp.scss';

const PostPage = _ => {

    const { id } = useParams();
    const history = useHistory();

    const [ post, setPost ] = useState({ title: '', text: '', name: '', date: '' });

    useEffect(_ => {
        axios.get(`/posts/${ id }`)
            .then(p => setPost(p.data))
            .catch(err => console.error(err));
    }, [ id ]);


    return <div className='Post'>
        <button onClick={ _ => history.push('/blog') }>Back</button>
        <h2>{ post.title }</h2>
        <span>{ editedString(post.date, post.edited) }</span>
        <p>{ post.text }</p>
    </div>;

};

export default PostPage;
