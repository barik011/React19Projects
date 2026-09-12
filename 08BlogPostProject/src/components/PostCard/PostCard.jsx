import React from 'react'
import blogServ from '../../appwrite/config'
import {link} from 'react-router-dom'

const PostCard = ({$id, title, featuredImage}) => {
  return (
    <link to={`/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={blogServ.filePreview(featuredImage)} title={title} alt={title}  className='rounded-xl' />
            </div>
            <h2 className='text-xl font-bold'>{title}</h2>

        </div>
    </link>
  )
}

export default PostCard