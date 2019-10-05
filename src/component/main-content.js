import React from 'react';
import { Route, Switch  } from "react-router-dom";
import About from './about';
import Dashboard from './dashboard';
import Users from './users';
import SingleUser from './singleuser';
import Products from './products';
import Blog from './blog';
import SingleBlog from './singleblog';
import Contact from './contact';
import Notfound from './404';
 
function MainContent(){
    return(
        <div className="content">   
            <Switch>
                <Route exact={true} path="/" component={Dashboard} />
                <Route exact={true} path="/users" component={Users} />
                <Route path="/users/:id" component={SingleUser} />
                <Route path="/products" component={Products} />
                <Route path="/about" component={About} />              
                <Route exact={true} path="/blog" component={Blog} />   
                <Route path="/blog/:id" component={SingleBlog} />              
                <Route path="/contact" component={Contact} />
                <Route component={Notfound} /> 
            </Switch>    
        </div>
    )
}

export default MainContent;