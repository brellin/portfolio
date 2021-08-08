import React, { useState, useEffect } from 'react';

import Post from './Post';
import NewPost from './NewPost';

import { openFileDialog, axios } from '../../assets';
import './Blog.scss';

const Blog = props => {

    function readFile(event) {
        const file = event.target.files[ 0 ];
        const fr = new FileReader();
        fr.onload = e => { setProof(JSON.parse(fr.result)); };
        fr.readAsText(file);
    }
    const [ proof, setProof ] = useState({});
    const [ isWill, setIsWill ] = useState(false);
    const [ posts, setPosts ] = useState([]);

    useEffect(_ => {

        if (proof.password && proof.name) {
            axios.defaults.headers = { ...proof };
            axios.post('/auth')
                .then(res => res.status === 200 && setIsWill(true))
                .catch(err => console.error(err));
        }

    }, [ proof ]);

    useEffect(_ => {

        axios.get('/posts')
            .then(res => setPosts(res.data))
            .catch(err => console.error(err));

    }, []);

    return <div className='Blog'>
        <h1>Blog</h1>

        <div className='PostWall'>
            { posts.length ?
                posts.map(post =>
                    <Post
                        key={ post.title + post.id }
                        post={ post }
                    />) : null
            }
        </div>

        {
            !isWill ?
                <button
                    onClick={ _ => openFileDialog(readFile) }
                >Add Post</button>
                :
                <NewPost />
        }
    </div>;

};

export default Blog;
