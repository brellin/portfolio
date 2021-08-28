import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, About, Work, Blog, PostPage } from './components';

const Routes = props => {

    return <div className="Routes">
        <Route exact path='/' component={ Home } />
        <Route path='/about' component={ About } />
        <Route path='/work' component={ Work } />
        <Route exact path='/blog' component={ Blog } />
        <Switch>
            <Route exact path='/blog/post/new' component={ _ => <PostPage newPost /> } />
            <Route exact path='/blog/post/:id' component={ PostPage } />
        </Switch>
        <Route path='/blog/post/:id/edit' component={ _ => <PostPage edit /> } />
    </div>;

};

export default Routes;
