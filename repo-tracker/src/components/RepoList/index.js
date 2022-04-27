import React from 'react'


function RenderRepos(data) {
  return data.map(repo => 
        <p>{repo.name}</p>
  )
}

export default RenderRepos
