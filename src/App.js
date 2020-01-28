import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom'

import home from './home'
import users from './Component/users'
import Usershow from './Component/usershow'
import post from './Component/post'
import Postshow from './Component/postshow'
import darkmode from './darkmode'

function App() {
  return (
    <BrowserRouter>
    <div>
      <center><h1 style={{color:"#b2bec3"}}> Blog Ui </h1></center>
      <Link to="/">Home</Link>|  |
      <Link to="/Users">Users</Link>| |
      <Link to="/post">Post</Link>||
      <Link to="/darkmode">Dark mode</Link>

      <Route path="/" component={home} exact={true}/>
      <Route exact path="/users" component={users}/>
      <Route exact path="/post" component={post}/>
      <Route path="/users/:id" component={Usershow}/>
      <Route path="/post/:id" component={Postshow}/>
      <Route path="/darkmode" component={darkmode}/>
    </div>
    </BrowserRouter>
  )
}

export default App
