import React, {Component} from 'react';
import './Blog.css';
import Posts from "./Posts/Posts";
import { Route, NavLink } from 'react-router-dom';
import { Switch } from 'react-router';
import newPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost'

class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/"
                                activeClassName="my-active"
                                activeStyle={{color:  '#fa923f', textDecoration: 'underline'}}
                                exact>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: "/newPost",
                                hash:'#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route exact path="/" render={() => {*/}
                {/*   return <h1>Home</h1>;*/}
                {/*}}/>*/}
                {/*<Route exact path="/" render={() => {*/}
                {/*   return <h1>Home2</h1>;*/}
                {/*}}/>*/}
                <Route path="/" exact component={Posts} />
                <Switch>
                    <Route path="/newPost" component={newPost} />
                    <Route path="/:id" exact component={FullPost} />
                </Switch>
            </div>
        );
    };
}

export default Blog;