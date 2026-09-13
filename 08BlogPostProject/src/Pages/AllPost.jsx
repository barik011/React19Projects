import React, { useEffect, useState } from 'react'
import authServ from '../appwrite/config'
import { Container,PostCard } from '../components'

const AllPost = () => {
    const [post,setPost] = useState([]);
    useEffect(()=>{
        authServ.getPost([]).then((posts)=>{
            if(posts){
                setPost(posts.documents)
            }
            
        })
    })
  return (
    <div className='w-full py-8'>
        <Container>
            {
                post.map((post)=>(
                    <div key={post.$id}>
                        <PostCard {...post} />
                    </div>
                ))
            }
        </Container>
    </div>
  )
}

export default AllPost