import React, { useState, useEffect } from 'react';

import Post from './Post';
import { axios } from '../../assets';
import './Blog.scss';

const Blog = _ => {

    const [ posts, setPosts ] = useState([ { id: 1, title: '', date: '', edited: '' }, { id: 2, title: '', date: '', edited: '' }, { id: 3, title: '', date: '', edited: '' }, { id: 4, title: '', date: '', edited: '' }, { id: 5, title: '', date: '', edited: '' }, ]);
    const [ loading, setLoading ] = useState(true);

    useEffect(_ => {

        axios.get('/posts')
            .then(res => {
                setLoading(false);
                setPosts(res.data);
            })
            .catch(err => console.error(err));

    }, []);

    console.log(posts);

    return <div className='Blog'>
        <h1>Blog</h1>

        <div className='PostWall'>
            { posts
                .sort((x, y) => x[ 'edited' || 'date' ] > y[ 'edited' || 'date' ])
                .map(post =>
                    <Post
                        key={ post.title + post.id }
                        post={ post }
                        loading={ loading }
                    />) }
        </div>
    </div>;

};

export default Blog;
