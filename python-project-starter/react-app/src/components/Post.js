
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { seeOnePost, seePost, getPostId } from "../store/posts";
import { DeleteOutlined } from '@ant-design/icons'
import './style/post.css'
import { unmountComponentAtNode } from "react-dom";
import CommentForm from "./CommentForm";
import Comment from './Comments'
import PostDelete from './PostDelete'
import setLike from '../store/posts'
import { useParams } from "react-router-dom";
import {  Button, Modal } from "antd";
import 'antd/dist/antd.css';
import { postLike } from '../store/postLike'
import PostLike from "./PostLike";



const Post = ({user, post}) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user)
    const sessionPost = useSelector((state) => state.post.post)
    const comments = useSelector((state)=> state.comment.comment)
    const [isLoaded, setIsLoaded] = useState(false)
    const [showComments, setShowComments] = useState(false)
    const [showCommentForm, setShowCommentForm] = useState(false)
    

  
    
    const showPostComments = () => {
        if (showComments === false) {
            setShowComments(true)
        }
        else {
            setShowComments(false)
        }

    }
   
    const showPostCommentForm = () => {
        if (showCommentForm === false) {
            setShowCommentForm(true)
        }
        else {
            setShowCommentForm(false)
        }

    }

    // const postLike = (like) => async (dispatch) => {
    //     const res = await fetch(`/api/postLikes/`, {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(like),
    //     });
        
    //     if (res.ok) {
    //         const liked = await res.json()
    //       dispatch(setLike(like));
    //       return res;
    //     }
    //   };
    
    

    useEffect(() => {
        dispatch(seePost()).then(() => {
            setIsLoaded(true)
        })
    }, [])

    
    return (
        <div>
            {isLoaded && sessionPost.slice(0).reverse().map((post) => (

                <div key={sessionPost.id} className='wrapper border-l-2 border-r-2 border-gray-600'>
                    <div class="flex flex-shrink-0 p-4 pb-0">
                        <a href="/post/:postId" class="flex-shrink-0 group block">
                            <div class="flex items-center">
                                <div class="ml-3">
                                    <p class="text-base leading-6 font-medium text-white">
                                        
                                        <span class="text-sm leading-5 font-medium text-grey-400 group-hover:text-gray-300 transition ease-in-out duration-75">
                                            @{post.username}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="pl-10 pr-10">
                        <p class="text-base width-auto font-medium text-white flex-shrink">
                            {post.postText}
                        </p>


                        <div class="flex">
                            <div class="w-full">

                                <div class="flex items-center">
                                    
                                    <PostLike postId={post.id} post={post}/>

                                    <div class="comment flex-1 text-center py-2 m-2"> {showCommentForm === false && (
                                        <div className='message-icon'>
                                            
                                            <button onClick={showPostCommentForm} href="#" class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-indigo-800 hover:text-indigo-300">
                                            <svg class="text-center h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>

                                            </button>
                                             
                                        </div> 
                             )}
                                        {showCommentForm && (
                                            <div className='icon-comment-holder'>
                                                <div onClick={showPostCommentForm} href="#" class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-indigo-800 hover:text-indigo-300">
                                                    <svg class="text-center h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                            

                                                </div>
                                                <div className='commentForm'>
                                                    <CommentForm postId={post.id}  />
                                                </div>


                                            </div>


                                        )}
                                        <div>
                                           
                                        </div>
                                    </div>
                                        
                                    <PostDelete post={post} />
                                   
                                    


                                </div>
                            </div>


                        </div>

                    </div>
                    <div className='comment-section'> {showComments === false && (
                                                <button className='show-comment-button m-5' onClick={showPostComments}>Show Comments</button>
                                            )}
                                                {showComments && (
                                                    <div className='comments-div'>
                                                        <button className='show-comment-button m-5' onClick={showPostComments}>Hide Comments</button>
                                                        <Comment postId={post.id} comments={comments} />
                                                        
                                                    </div>
                                                )}
                                            </div>


                    <hr class="border-b-2 border-gray-600"></hr>

                </div>

            ))}
        </div>
    )

}

export default Post;