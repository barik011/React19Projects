import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const param = useParams()
    console.log(param.userid)
  return (
    <div>User : {param.userid}</div>
  )
}

export default User