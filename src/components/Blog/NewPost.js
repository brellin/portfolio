import React, { useState } from 'react';

import { axios } from '../../assets';

const NewPost = props => {

    const [ title, setTitle ] = useState('');
    const [ text, setText ] = useState('');

    return <form onSubmit={ e => {
        e.preventDefault();
        axios.post('/posts/new', { title, text })
            .then(_ => {
                setTitle('');
                setText('');
            })
            .catch(err => console.error(err));
    } }>
        <div>
            <label>Title</label>
            <input
                type="text"
                onChange={ e => setTitle(e.target.value) }
                value={ title }
            />
        </div>

        <div>
            <label>Text</label>
            <textarea
                onChange={ e => setText(e.target.value) }
                value={ text }
            />
        </div>
    </form>;

};

export default NewPost;
