import React, {  useState } from 'react'
import './style.css'

function UsernameForm() {
    const [username, setUsername] = useState('')
    const [data, setData] = useState(null)
    const [error, setError] = useState ('')
    const [openedItem, setOpenedItem] = useState(null);

    const handleSubmit = e => {
        e.preventDefault()
        if (!username) return; 
        try {
          async function fetchData(){
            const response = await fetch(`https://api.github.com/users/${username}/repos`)
            const response_json = await response.json()
            console.log(response_json)
            if (response_json.message){
              setError(response_json.message)
              setUsername('')
            } else{
              setData(response_json)
            }
          }
          fetchData()
        } catch (error) {
          console.log(error)
        }
    }
    
  return (
    <>
        <form onSubmit= {handleSubmit}>
            <label htmlFor="username">Username: </label>
            <input type="text" id="username" name="username" aria-label="username" placeholder="ex. Jaxsan2206" value={username} onChange={(e)=>{setUsername(e.target.value)}}></input>
            <button type="submit">Submit</button>
        </form>
        {data &&
        data.map((repo,i) => (
          <div className="repo-div" key={i} onClick={()=> setOpenedItem(i)}>
            <h2 className="repo-name">{repo.name}</h2>
            {openedItem === i ? 
            <ul>
              <li>Fork Count: {repo.forks_count}</li>
              <li>Stargazers Count: {repo.stargazers_count}</li>
              <li>Open Issues Count: {repo.open_issues_count}</li>
            </ul> 
            : ''}
          </div>
        ))}
    </>
  )
}

export default  UsernameForm
