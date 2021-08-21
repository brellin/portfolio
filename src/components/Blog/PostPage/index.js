import moment from 'moment';
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { axios, openFileDialog } from '../../../assets';

import './pp.scss';

const PostPage = ({ edit, newPost }) => {

    const { id } = useParams();
    const { push } = useHistory();

    const [ post, setPost ] = useState({ title: '', text: '', name: '', date: '' });
    const [ isWill, setIsWill ] = useState(false);
    const [ proof, setProof ] = useState({});

    useEffect(_ => {

        if (proof.password && proof.name) {
            axios.defaults.headers = proof;
            axios.post('/auth')
                .then(res => res.status === (200 || 204) && setIsWill(true))
                .catch(err => {
                    console.error(err);
                    push('/wrong');
                });
        }

    }, [ proof ]);

    useEffect(_ => {
        if (!newPost) axios.get(`/posts/${ id }`)
            .then(p => setPost(p.data))
            .catch(err => console.error(err));
    }, [ id ]);

    return <div className='Post'>
        { (edit || newPost) ?
            <input
                type="text"
                value={ post.title }
                onChange={ e => setPost({ ...post, title: e.target.value }) }
            />
            :
            <h2>{ post.title }</h2> }
        <span>{ `${ post.name } on ${ moment(post.date, 'x').format('LL') }${ (edit || post.edited) ? ` (last edited on ${ moment(edit ? Date.now() : post.edited, 'x').format('LL') })` : '' }` }</span>
        { (edit || newPost) ?
            <textarea
                value={ post.text }
                onChange={ e => setPost({ ...post, text: e.target.value }) }
            />
            :
            <p>{ post.text }</p> }

        { (edit || newPost) ? !isWill ? <button onClick={ _ => openFileDialog(setProof) }>Verify</button>
            :
            <button onClick={ _ => edit ? axios

                .put(`/posts/${ id }`, post)
                .then(r => console.log(r))

                .catch(err => console.error(err))
                :
                axios
                    .post('/posts/new', post)
                    .then(r => console.log(r))

                    .catch(err => console.error(err))
            }>Submit</button> : null }
    </div>;

};

export default PostPage;
