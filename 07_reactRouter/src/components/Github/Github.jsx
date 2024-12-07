//import React from 'react'
import { useLoaderData } from "react-router-dom"
//import { useEffect, useState } from "react"

function Github() {
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/AkshatBhatt11')
    //     .then(response => response.json())
    //     .then(data => {console.log(data); setData(data)})
    // }, [])

    const data = useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-600 text-white text-3xl'>
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} className="p-4"/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/AkshatBhatt11')
    return response.json()
}