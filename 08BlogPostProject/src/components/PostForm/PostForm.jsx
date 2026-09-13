import React from 'react'
import {useForm} from 'react-hook-form'
import {Input,Button,RTE} from '../components'
import aapwriteServ from '../appwrite/appwrite-services'
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'

const PostForm = (post) => {
    const {register,handleSubmit,watch,setValue,control,getValues} =useForm({
        defaultValues:{
            title:post?.title||'',
            content:post?.content||'',
            slug:post?.slug||'',
            status:post?.status||'Active'
        }
    })
  return (
    <div>PostForm</div>
  )
}

export default PostForm