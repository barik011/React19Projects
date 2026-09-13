import React, { useEffect, useState } from 'react'
import {Container,PostForm} from '../components'
import aapwriteServ from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'

const EditPost = () => {
    const [posts,setPosts]=useState(null);
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        if(slug){
            aapwriteServ.getPost(slug).then((post)=>{
                if(post){
                    setPosts(post)
                }
            })
        }
    },[slug,navigate])
  return (posts?
    <div className='py-8'>
        <Container>
            <PostForm post={posts} />
        </Container>
    </div>
    :
    null
  )
}

export default EditPost