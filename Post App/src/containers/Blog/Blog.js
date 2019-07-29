import React, {Component} from 'react';
import './Blog.css';
import Posts from "./Posts/Posts";
import { Route } from 'react-router-dom';
import newPost from './NewPost/NewPost';

class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/newPost">New Post</a></li>
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
                <Route path="/newPost" component={newPost} />
            </div>
        );
    };
}

export default Blog;