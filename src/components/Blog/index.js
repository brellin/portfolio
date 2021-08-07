import React, { useState } from 'react';
import axios from 'axios';

const Blog = props => {

    const [ title, setTitle ] = useState('');
    const [ text, setText ] = useState('');

    return <div className='Blog'>
        <h1>Blog</h1>
        <form onSubmit={ e => {
            e.preventDefault();
            axios.post('https://pfl-be.herokuapp.com/new', { title, text })
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
        </form>
    </div>;

};

export default Blog;
