import moment from 'moment';
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { axios, openFileDialog } from '../../../assets';

import './pp.scss';

const PostPage = ({ edit, newPost }) => {

    const { id } = useParams();
    const { push } = useHistory();

    const [ post, setPost ] = useState({ title: '', text: '', name: '', date: '' });
    const [ proof, setProof ] = useState({});

    useEffect(_ => {
        if (!newPost) axios.get(`/posts/${ id }`)
            .then(p => setPost(p.data))
            .catch(err => console.error(err));
    }, [ id ]);

    if (edit || newPost) {

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

        const [ isWill, setIsWill ] = useState(false);

        const sendData = _ => edit ? axios

            .put(`/posts/${ id }`, post)
            .then(r => {
                console.log(r);
                push(`/blog/post/${ id }`);
            })

            .catch(err => console.error(err))
            :
            axios
                .post('/posts/new', post)
                .then(r => {
                    console.log(r);
                    push(`/blog/post/${ r.data.id }`);
                })

                .catch(err => console.error(err));

        return <div className="Post">
            { !isWill ? <div className="Restricted">
                <div className="Verification">
                    <button onClick={ _ => openFileDialog(setProof) }>CHECK YOURSELF</button>
                </div>
            </div> : null }

            <input
                type="text"
                value={ post.title }
                onChange={ e => setPost({ ...post, title: e.target.value }) }
            />
            <span>{ `${ proof.name } on ${ moment(post.date || Date.now().toString(), 'x').format('LL') }${ (edit || post.edited) ? ` (last edited on ${ moment(edit ? Date.now() : post.edited, 'x').format('LL') })` : '' }` }</span>
            <textarea
                value={ post.text }
                onChange={ e => setPost({ ...post, text: e.target.value }) }
            />
            { isWill ?
                <button onClick={ sendData }>Submit</button>
                : null }
        </div>;
    }

    return <div className='Post'>
        <h2>{ post.title }</h2>
        <span>{ `${ post.name } on ${ moment(post.date, 'x').format('LL') }${ (edit || post.edited) ? ` (last edited on ${ moment(edit ? Date.now() : post.edited, 'x').format('LL') })` : '' }` }</span>
        <p>{ post.text }</p>
    </div>;

};

export default PostPage;
