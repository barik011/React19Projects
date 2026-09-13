import React, { useCallback, useEffect } from 'react'
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

    useEffect(()=>{
            const subscription = watch((value,{name})=>{
                if(name==='title'){
                    setValue("slug",slugTransform(value.title),{shouldValidate:true})
                }
            })
    },[watch,slugTransform,setValue])

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={aapwriteServ.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : ''} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
  )
}

export default PostForm