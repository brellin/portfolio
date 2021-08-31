import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { axios, openFileDialog, editedString } from '../../../assets';

const EditPostPage = ({ newPost, edit }) => {

    const { id } = useParams();
    const { push } = useHistory();

    const [ isWill, setIsWill ] = useState(false);
    const [ proof, setProof ] = useState({});
    const [ post, setPost ] = useState({ title: '', text: '', name: '', date: '' });

    useEffect(_ => {

        if (proof.password && proof.name) {
            axios.defaults.headers = proof;
            axios.post('/auth')
                .then(res => res.status === (200 || 204) && setIsWill(true))
                .catch(err => {
                    console.error(err);
                    alert('Nice try, but you are not me.');
                });
        }

    }, [ proof ]);

    useEffect(_ => {
        if (!newPost) axios.get(`/posts/${ id }`)
            .then(p => setPost(p.data))
            .catch(err => console.error(err));
    }, [ id ]);

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
        <span>{ editedString(newPost ? Date.now().toString() : post.date, post.edited) }</span>
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
};

export default EditPostPage;
