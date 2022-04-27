import React, { useState } from 'react'
import FetchGithub from '../FetchGithub'

function UsernameForm() {
    const [username, setUsername] = useState('Jaxsan2206')

    
    const handleSubmit = e => {
        e.preventDefault()
        // const input = e.target.value
        const formData= new FormData(document.querySelector('form')) // console.log this to check what format this is in 
        const formDataSerialised=Object.fromEntries(formData)
        console.log(formDataSerialised)
        setUsername(formDataSerialised.username)
        setUsername('')
    }

  return (

    <>
        <form onSubmit= {handleSubmit}>
            <label htmlFor="username">Enter your username</label>
            <input type="text" id="username" name="username" aria-label="username" placeholder="Enter username"></input>
            <button type="submit">Submit</button>
        </form>
        {<FetchGithub username={username}/>}
    </>

  )
}

export default  UsernameForm
