import React, { Component } from 'react'

export default class ClassCycle extends Component {
    constructor() {
      super();
    
      this.state = {users:[]}; 
    }

    componentDidMount() {
        setTimeout(()=>{
            fetch('https://jsonplaceholder.typicode.com/users/')
            .then((result) => result.json())
            .then((users)=>  this.setState({users:users}));  

                 
        }, 3000);
    }
    
    render() {
        return (
          <div>
            <h1>Api call from json placeholder</h1>
            {this.state.users.map((user) =>{
               
                return <>
                <h2>Name:{user.name}</h2>
                <h2>Name:{user.username}</h2>
                <h2>Name:{user.email}</h2>
                <hr />
                </>
            })}
          </div>
        )
      }
    }
