import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { axios, openFileDialog, momentize } from '../../../assets';

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

        const submitPost = _ => edit ?
            axios

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

        return <div className="Post Edit">
            { !isWill ? <div className="Restricted">
                <div className="Verification">
                    <button onClick={ _ => openFileDialog(setProof) }>CHECK YOURSELF</button>
                </div>
            </div> : null }
            { edit ? <button
                className='x'
                onClick={ _ => {
                    window.confirm(`Do you really want to delete ${ post.title }?`) ?
                        axios
                            .delete(`/posts/${ id }`)
                            .then(_ => push('/blog'))
                            .catch(err => console.error(err))
                        :
                        alert('You have chosen not to delete the post.');
                } }
            >X</button> : null }

            <input
                type="text"
                value={ post.title }
                onChange={ e => setPost({ ...post, title: e.target.value }) }
                placeholder='Title'
                disabled={ !isWill }
            />
            <span>{ `${ proof.name } on ${ momentize(post.date || Date.now().toString(), 'x') }${ (edit || post.edited) ? ` (last edited on ${ momentize(edit ? Date.now() : post.edited, 'x') })` : '' }` }</span>
            <textarea
                value={ post.text }
                onChange={ e => setPost({ ...post, text: e.target.value }) }
                placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, eaque dignissimos a soluta enim optio ipsum odio quis provident nostrum totam, voluptatem autem ipsam ducimus laboriosam dolores neque deleniti doloremque.'
                disabled={ !isWill }
            />
            { isWill ?
                <button onClick={ submitPost }>Submit</button>
                : null }
        </div>;
    }

    return <div className='Post'>
        <h2>{ post.title }</h2>
        <span>{ `${ post.name } on ${ momentize(post.date, 'x') }${ (edit || post.edited) ? ` (last edited on ${ momentize(edit ? Date.now() : post.edited, 'x') })` : '' }` }</span>
        <p>{ post.text }</p>
    </div>;

};

export default PostPage;
