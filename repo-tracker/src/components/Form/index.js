import React, { useState } from 'react'
import axios from 'axios'

function UsernameForm() {
    const [username, setUsername] = useState('')
    const [repoName, setRepoName] = useState([])
    const [repos, setRepos] = useState([])

        const fetchGithub = async (username) => {
            try {
                const {data} = await axios.get(`https://api.github.com/users/${username}/repos`)
                setRepos(data)
                console.log(repos)
            } catch (error) {
                console.warn(error)
            }
        }
       
    const updateInput = (e) => {
        const input = e.target.value
        setUsername(input)
    }

    const handleUsername = async (e) => {
        e.preventDefault()
        fetchGithub(username)
    }

  return (

    <>
        <form onSubmit={handleUsername}>
            <label htmlFor="username">Enter your username</label>
            <input type="text" id="username" name="username" aria-label="username" placeholder="Enter username" onChange={updateInput}></input>
            <button type="submit">Submit</button>
        </form>
    </>

  )
}

export default  UsernameForm
