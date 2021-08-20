import moment from 'moment';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { axios } from '../../../assets';

import './pp.scss';

const PostPage = ({ edit }) => {

    const { id } = useParams();

    const [ post, setPost ] = useState({ title: '', text: '', name: '', date: '' });

    useEffect(_ => {
        axios.get(`/posts/${ id }`)
            .then(p => setPost(p.data))
            .catch(err => console.error(err));
    }, [ id ]);

    return <div className={ `Post${ edit ? ' Edit' : '' }` }>
        { edit ?
            <input
                type="text"
                value={ post.title }
                onChange={ e => setPost({ ...post, title: e.target.value }) }
            />
            :
            <h2>{ post.title }</h2> }
        <span>{ `${ post.name } on ${ moment(post.date, 'x').format('LL') }` }</span>
        { edit ?
            <textarea
                value={ post.text }
                onChange={ e => setPost({ ...post, text: e.target.value }) }
            />
            :
            <p>{ post.text }</p> }
    </div>;

};

export default PostPage;
