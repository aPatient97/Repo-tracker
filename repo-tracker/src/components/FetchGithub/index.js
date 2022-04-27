import React, { useEffect, useState } from 'react'

function FetchGithub({username}) {
  const [username, setUsername] = useState(username)
  const [data, setData] = useState([])
  useEffect(()=>{
    const fetchGithub = async (username) => {
      try {
          console.log('function called')
          const {data} = await fetch(`https://api.github.com/users/${username}/repos`)
          console.log(data)
          setData(data)
      } catch (error) {
          console.warn(error)
      }
  }
  fetchGithub()
  }, [])


  return (
    <div>FetchGithub</div>
  )
}

export default FetchGithub
