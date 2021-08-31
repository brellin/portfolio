import React from 'react';
import { Route } from 'react-router-dom';

import { Home, About, Work, Blog, PostPage, EditPostPage } from '../components';

const Routes = props => {

    return <div className="Routes">
        <Route exact path='/' component={ Home } />
        <Route path='/about' component={ About } />
        <Route path='/work' component={ Work } />
        <Route exact path='/blog' component={ Blog } />
        <Route exact path='/blog/new' component={ _ => <EditPostPage newPost /> } />
        <Route exact path='/blog/post/:id' component={ PostPage } />
        <Route path='/blog/post/:id/edit' component={ _ => <EditPostPage edit /> } />
    </div>;

};

export default Routes;
