import React, { useState, useEffect } from 'react';

import Post from './Post';
import { axios } from '../../assets';
import './Blog.scss';

const Blog = props => {

    const [ posts, setPosts ] = useState([]);

    useEffect(_ => {

        axios.get('/posts')
            .then(res => setPosts(res.data))
            .catch(err => console.error(err));

    }, []);

    return <div className='Blog'>
        <h1>Blog</h1>

        <div className='PostWall'>
            { posts.length ?
                posts.sort((x, y) => x[ 'edited' || 'date' ] > y[ 'edited' || 'date' ]).map(post =>
                    <Post
                        key={ post.title + post.id }
                        post={ post }
                    />) : null
            }
        </div>
    </div>;

};

export default Blog;
