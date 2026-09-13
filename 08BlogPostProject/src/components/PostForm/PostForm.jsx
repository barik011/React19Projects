import React, { useCallback } from 'react'
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
    });
    const navigate = useNavigate();
    const authData = useSelector((state)=>(state.auth.userData));

    const submit =async (data)=>{
        if(post){
            const file = data.image[0]? await aapwriteServ.uploadFile(data.image[0]):null;
            if(file){
                aapwriteServ.deleteFile(featuredImage)
            }

            const dbPost = await aapwriteServ.updatePost(post.$id,{...data,featuredImage:file?file.$id:undefined});
            if(dbPost){
                navigate(`/post/${dbPost.$id}`);
            }
        }
        else{
            const file = await aapwriteServ.uploadFile(data.image[0])

            if(file){
              const fileId =  file.$id
              data.featuredImage= fileId

              const dbPost = await aapwriteServ.updatePost({...data,userId:userData.$id});
              if(dbPost){
                navigate(`/post/${dbPost.$id}`);
            }

            }
        }
    }

    const slugTransform = useCallback((value)=>{
        if(value && typeof value === 'string'){
            return value
            .trim()
            .toLowerCase()
            .replace(/^[a-zA-Z\d\s]+/, '-')
            .replace(/\s/g,'-')
        }
        return '';
    },[])

  return (
    <div>PostForm</div>
  )
}

export default PostForm