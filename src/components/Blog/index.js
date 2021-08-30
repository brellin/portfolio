import React, { useState, useEffect } from 'react';

import Post from './Post';
import { axios } from '../../assets';
import './Blog.scss';

const Blog = _ => {

    const [ posts, setPosts ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(_ => {

        axios.get('/posts')
            .then(res => {
                setLoading(false);
                setPosts(res.data);
            })
            .catch(err => console.error(err));

    }, []);

    return <div className='Blog'>
        <h1>Blog</h1>

        <div className='PostWall'>
            { loading ?
                <>
                    { postLoading() }
                </>
                :
                posts
                    .sort((x, y) => x[ 'edited' || 'date' ] > y[ 'edited' || 'date' ])
                    .map(post =>
                        <Post
                            key={ post.title + post.id }
                            post={ post }
                        />)
            }
        </div>
    </div>;

};

const postLoading = _ => {
    const createPost = _ => {
        const pst = document.createElement('div');
        pst.className = 'Post Loading';
        pst.appendChild(document.createElement('h2'));
        pst.appendChild(document.createElement('span'));
        return pst;
    };
    window.addEventListener('load', _ => {
        document.getElementsByClassName('PostWall').item(0).appendChild(createPost());
        document.getElementsByClassName('PostWall').item(0).appendChild(createPost());
        document.getElementsByClassName('PostWall').item(0).appendChild(createPost());
        document.getElementsByClassName('PostWall').item(0).appendChild(createPost());
        document.getElementsByClassName('PostWall').item(0).appendChild(createPost());
    });
};

export default Blog;
