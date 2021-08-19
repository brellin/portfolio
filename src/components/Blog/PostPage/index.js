import moment from 'moment';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { axios } from '../../../assets';

import './pp.scss';

const PostPage = props => {

    const { id } = useParams();

    const [ post, setPost ] = useState({ title: '', text: '', name: '', date: '' });

    useEffect(_ => {
        axios.get(`/posts/${ id }`)
            .then(p => setPost(p.data))
            .catch(err => console.error(err));
    }, [ id ]);

    return <div className='Post'>
        <h2>{ post.title }</h2>
        <span>{ `${ post.name } on ${ moment(post.date, 'x').format('LL') }` }</span>
        <p>{ post.text }</p>
    </div>;

};

export default PostPage;
