import React from 'react';
import { Switch, Route } from 'react-router-dom';
import New from './pages/new'; 
import Jobs from './pages/jobs';
import Show from './pages/show';
import Ask from './pages/ask';
import Top from './pages/top';

const Main = () => (
    <main>
        <Switch>
        <Route exact path='/' component={Top}/>
        <Route exact path='/top' component={Top}/>
        <Route path='/new' component={New}/>
        <Route path='/show' component={Show}/>
        <Route path='/ask' component={Ask}/>
        <Route path='/jobs' component={Jobs}/>
        </Switch>
    </main>
);

export default Main;