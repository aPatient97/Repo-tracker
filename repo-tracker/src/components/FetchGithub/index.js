import React, { useEffect, useState } from 'react'

function FetchGithub({username}) {
  const [repos, setRepos] = useState([])
  console.log('Outer function called')
  // console.log(username)
  useEffect(()=>{
    const fetchGithub = async (username) => {
      try {
          console.log('function called')
          // console.log(username)
          const {data} = await fetch(`https://api.github.com/users/${username}/repos`)
          // console.log(data)
          setRepos(data)
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
