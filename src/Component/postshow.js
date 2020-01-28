import React from 'react'
import axios from 'axios'
import {Link } from 'react-router-dom'

class Postshow extends React.Component{
    constructor(){
        super()
        this.state={
            post:{},
            user:{},
            comment:[]
        }
    }

    componentDidMount(){
        const id= this.props.match.params.id

        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response =>{
            const post=response.data
            axios.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
            .then(response=>{
                const user=response.data
                this.setState({post , user})
            })
            .catch(err=>{
                alert(err)
            })  
            
        })
        .catch(err=>{
            alert(err)
        })
       
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(response=>{
            const comment=response.data
            this.setState({comment})
        })
        .catch(err=>{
            alert(err)
        })  
    }

    render(){
        
            const post=this.state.post
            const user=this.state.user
            
            return(
              <div>
                  <h1 style={{color:"#b2bec3"}}>Post show - {post.id}</h1>
                  <h2 style={{color:"#b2bec3"}}>Author:{user.name}</h2>
                  <h2 style={{color:"#b2bec3"}}>Title:{post.title}</h2>
                  <h2 style={{color:"#b2bec3"}}>Body:{post.body}</h2><hr/>
                  <h2 style={{color:"#b2bec3"}}>Comments : </h2>
                 <ul>
                     {
                         this.state.comment.map(comments=>{
                            return<li key={comments.id} style={{color:"#b2bec3"}}>{comments.body}</li>
                     })
                    }
                 </ul><hr/>
                 <Link to={`/users/${user.id}`}>More about author</Link>

              </div>
            )
    }
} 

export default Postshow