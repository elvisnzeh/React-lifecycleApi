import { useState, useEffect } from 'react'
import axios from 'axios';

const FunCycle = () => {
    const [users, setUsers]= useState([]);

    const userdata = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/')
        setUsers(response.data)
    }

    useEffect(()=>{ 
        userdata()
    })

   // console.log(users)
  return (
    <div>
      <h1>axios Component</h1>
      {users.map((user)=>{

        return(
            <>
            <h2>name:{user.name}</h2>
            <h2>name:{user.email}</h2>
            <h2>name:{user.username}</h2>
            <hr />

            </>
            )
        })}
    </div>
  )
}

export default FunCycle
