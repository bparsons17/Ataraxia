import React, { useState } from "react";
import {createPost} from '../store/posts'
import { useDispatch, useSelector } from "react-redux";
import { message } from 'antd';
import './style/postForm.css'
import { useHistory } from 'react-router-dom'


const PostForm = ({userId}) => {
    const [postText, setPostText] = useState("");
    const sessionUser = useSelector((state)=> state.session.user)
    console.log(sessionUser.username)
    
    const dispatch = useDispatch()
    const history = useHistory()

    const error = () => {
        message.error("Please enter your post!");
      };


      const onPostCreation = async (e) => {
        e.preventDefault();
        if (!postText) {
          error();
          return;
        }
    
        dispatch(
          createPost({
            postText,
            userId
          })
        );
        history.push('/posts')
      };

      return (
          <div className='outer-div flex w-3/5 '>
            <div className='nav-container'>
             <nav className="mt-5 px-2">
                <a href="#" class="group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full hover:bg-indigo-800 hover:text-indigo-300">
              <svg className="mr-4 h-6 w-6 " stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"/>
              </svg>
              Home
            </a>
            <a href="#" className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full hover:bg-indigo-800 hover:text-indigo-300">
              <svg className="mr-4 h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path></svg>
              
              Explore
            </a>
            <a href="#" className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-indigo-800 hover:text-indigo-300">
              <svg className="mr-4 h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
             Notifications
            </a>
            <a href="#" class="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-indigo-800 hover:text-indigo-300">
              <svg class="mr-4 h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              Messages
            </a>
            <a href="#" class="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-indigo-800 hover:text-indigo-300">
              <svg class="mr-4 h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
              Bookmarks
            </a>
            <a href="#" class="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-indigo-800 hover:text-indigo-300">
              <svg class="mr-4 h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
              Lists
            </a>
                <a href="#" class="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-indigo-800 hover:text-indigo-3000">
              <svg class="mr-4 h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              Profile
            </a>
                <a href="#" class="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-indigo-800 hover:text-indigo-300">
              <svg class="mr-4 h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              More
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
                        <a href="" className=" text-2xl font-medium rounded-full text-white hover:bg-purple-800 hover:text-purple-300 float-right">
                            <svg className="m-2 h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><g><path d="M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"></path></g>
                            </svg>
                        </a>
                  </div>
                    <hr className="border-gray-600"></hr>
                    <div className="flex flex-col">
                    {/* <div className="m-2 w-10 py-1">
                        <img className="inline-block h-10 w-10 rounded-full" src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt="" />
                    </div> */}
                    <div>@{sessionUser.username}</div>
                    <div className="flex-1 px-2 pt-2 mt-2 flex-col">
                        <textarea className=" bg-transparent text-gray-300 font-medium text-lg w-full" rows="2" cols="50" placeholder="What's happening?" name='post_text'
                      type='text'
                      value={postText}
                      onChange={(e)=> setPostText(e.target.value)} >{}</textarea>
                    </div>                    
                </div>
                  {/* <div>
                      <label for='postText'>Post</label>
                      <input
                      name='post_text'
                      type='text'
                      value={postText}
                      onChange={(e)=> setPostText(e.target.value)} 
                      />
                  </div> */}
                  <div>
                      <button className='post_btn bg-indigo-500 w-48 mt-5 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full' type='submit'>Post</button>
                  </div>
                  </div>
              </form>
          </div>
          
      )







}

export default PostForm;