import React, { useState } from "react";
import {createPost} from '../store/posts'
import { useDispatch, useSelector } from "react-redux";
import { message } from 'antd';
import './style/postForm.css'
import { useHistory } from 'react-router-dom'
import Post from "./Post";
import CommentForm from "./CommentForm";


const PostForm = ({userId, posts}) => {
    const [postText, setPostText] = useState('');
    const sessionUser = useSelector((state)=> state.session.user)
    // const posts = useSelector((state)=> state.post.post)
    

  
    
    const dispatch = useDispatch()
    const history = useHistory()

    const error = () => {
        message.error("Please enter your post!");
      };

      const clearState = () => {
        setPostText('')
      }


      const onPostCreation = async (e) => {
        e.preventDefault();
        // if (!postText) {
        //   error();
        //   return;
        // }
    
        dispatch(
          createPost({
            postText,
            userId
          },[])
          
        );
        await clearState()
        // history.push('/posts')
      };

      return (
          <div className='outer-div flex w-3/5 '>
            <div className='nav-container'>
             <nav className="mt-5 px-2">
                <a href="/posts" class="group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full hover:bg-indigo-800 hover:text-indigo-300">
              <svg className="mr-4 h-6 w-6 " stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"/>
              </svg>
              Home
            </a>
            <a href="#" className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-indigo-800 hover:text-indigo-300">
              <svg className="mr-4 h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
             Notifications
            </a>
          
            <a href="#" class="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-indigo-800 hover:text-indigo-300">
              <svg class="mr-4 h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
              Channels
            </a>
                <a href="#" class="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-indigo-800 hover:text-indigo-3000">
              <svg class="mr-4 h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              Profile
            </a>
                <a href="#" class="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-indigo-800 hover:text-indigo-300">
              <svg class="mr-4 h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              My Posts
            </a>
                
                <button class="bg-indigo-500 w-48 mt-5 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
                Post
              </button>
          </nav>
          </div>
              <form onSubmit={onPostCreation} className="postForm w-3/5">
                  <div className='flex flex-col'>
                  <div className="home flex-1 m-2 flex-row">
                        <h2 className="px-4 py-2 text-xl font-semibold text-white">Home</h2>
                      
                  </div>
                    <hr className="border-gray-600"></hr>
                    <div className="flex flex-col">
            
                    <div className='username_div'>User: @{sessionUser.username}</div>
                    <div className="flex-1 px-2 pt-2 mt-2 flex-col">
                        <textarea className='bg-transparent text-gray-300 font-medium text-lg w-full focus:outline-none focus:ring focus:border-indigo-300' 
                      rows="2" cols="50" placeholder="What's happening?" name='post_text'
                      type='text'
                      value={postText}
                      onChange={(e)=> setPostText(e.target.value)}>

                      </textarea>
                    </div>                    
                </div>
                  
                  <div>
                      <button className='post_btn bg-indigo-500 w-48 mt-5 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full' type='submit'>Post</button>
                  </div>
                  </div>
                  <div>
                <Post />
              </div>
             
              </form>
              
          </div>
          
      )







}

export default PostForm;