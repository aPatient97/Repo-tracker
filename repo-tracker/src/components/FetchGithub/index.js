import React, { useEffect, useState } from 'react'

function FetchGithub({username}) {
  const [user, setUser] = useState(username)
  const [data, setData] = useState([])
  
  useEffect(()=>{
    const fetchGithub = async () => {
      try {
          // console.log('function called')
          console.log(user)
          const {data} = await fetch(`https://api.github.com/users/${user}/repos`)
          console.log(data)
          setData(data)
      } catch (error) {
          console.warn(error)
      }
  }
  fetchGithub()
  }, [user])


  return (
    <div>
      <p>{data.name}</p>
    </div>
  )
}

export default FetchGithub
