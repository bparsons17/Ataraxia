  
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { seeOnePost, seePost, getPostId } from "../store/posts";
import { DeleteOutlined } from '@ant-design/icons'
import './style/post.css'
import { unmountComponentAtNode } from "react-dom";
import CommentForm from "./CommentForm";
import Comment from './Comments'
import { useParams } from "react-router-dom";



const Post = ({post, user,}) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state)=> state.session.user)
    const sessionPost = useSelector((state)=> state.post.post)
    // const postId = useParams()
    
    


    useEffect(()=> {
        dispatch(seePost())
        // dispatch(getPostId(postId))
    }, [post, user])
    return (
        <div>
            {sessionPost && sessionPost.slice(0).reverse().map((post) => (
                
                <div className='wrapper'>
                     <div class="flex flex-shrink-0 p-4 pb-0">
                <a href="/post/:postId" class="flex-shrink-0 group block">
                  <div class="flex items-center">
                    {/* <div>
                      <img class="inline-block h-10 w-10 rounded-full" src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt="" />
                    </div> */}
                    <div class="ml-3">
                      <p class="text-base leading-6 font-medium text-white">
                        {post.firstname} {post.lastname} 
                        <span class="text-sm leading-5 font-medium text-grey-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                            @{post.username}
                          </span>
                           </p>
                    </div>
                  </div>
                </a>
            </div>
            <div class="pl-16">
                <p class="text-base width-auto font-medium text-white flex-shrink">
                 {post.postText}
                </p>


                <div class="flex">
                    <div class="w-full">
                        
                        <div class="flex items-center">
                            <div class="flex-1 text-center">
                                <a href="#" class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                                    <svg class="text-center h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                                  </a>
                            </div>

                        
                            <div class="flex-1 text-center py-2 m-2">
                                <a href="#" class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                                    <svg class="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                </a>
                            </div>
                            <div>
                                <DeleteOutlined class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"/>
                            </div>

                           
                        </div>
                    </div>

                
                </div>
                
              </div>
              <div >
                  <CommentForm postId={post.id}/>
              </div>
              <div>
                  <Comment postId={post.id}/>
              </div>
              <hr class="border-gray-600"></hr>
             
                </div>

            ))}
        </div>
    )

}

export default Post;