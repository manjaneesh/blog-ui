import React from 'react'
import axios from 'axios'

class Usershow extends React.Component{
    constructor(){
        super()
        this.state={
            user:{},
            post:[]
        }
    }


componentDidMount(){
    const id=this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response=>{
            const user=response.data
            this.setState({user})
        })
        .catch(err=>{
            alert(err)
        })
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(response=>{
            const post=response.data
            this.setState({post})
        })

}

render(){
    const user =this.state.user
    return(
        <div>
        <h1 style={{color:"#b2bec3"}}>User show-{this.props.match.params.id}</h1>
        <h2 style={{color:"#b2bec3"}}><em>Author</em>:{user.name}----<em>Email:</em>{user.email}----<em>Website:</em>{user.website}</h2>
        <ul>
            {this.state.post.map(posts=>{
                return<li key={posts.id}>{posts.title}</li>
            })}
        </ul>

        </div>
    )


}}



export default Usershow