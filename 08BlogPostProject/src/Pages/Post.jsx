import React,{useState,useEffect} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import aapwriteServ from '../appwrite/config'
import {Button,Container} from '../components'
import parse from 'html-react-parse'
import { useSelector } from 'react-redux'


const Post = () => {
  const [post,setPost]=useState(null);
  const {slug} = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state)=>state.)

  return (
    <div>Post</div>
  )
}

export default Post