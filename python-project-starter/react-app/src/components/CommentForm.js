import React, { useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import { createComment } from '../store/comments'
import { message } from 'antd';



import './style/commentForm.css'


const CommentForm = (props) => {
    const sessionUser = useSelector((state) => state.session.user)
    const [commentText, setCommentText] = useState('')
    const dispatch = useDispatch();
    const postId = props.postId
    
   
    
    
    const userId = sessionUser.id

    const error = () => {
        message.error("Please enter a comment!");
      };
      
    const clearState = () => {
      setCommentText('')
    }


    const onCommentCreation = async (e) => {
        e.preventDefault();
        if (!commentText) {
          error();
          return;
        }
        dispatch(createComment(commentText, userId, postId ),[])
        await clearState()
        
    }

    return (
      <form  onSubmit={onCommentCreation}>
        <div className='input-div border-l-2 border-r-2 border-b-2 border-gray-600 mt-3'>
        <input
          value={commentText}
          className='comment-form  bg-transparent text-gray-300 font-medium text-lg w-full '
          placeholder='Add a comment'
          onChange={(e) => setCommentText(e.target.value)}
        ></input>
        <button type='submit' className='comment-form__button border-l-2 border-gray-600'>
          Post
        </button>
        </div>
      </form>
        
    )
}

export default CommentForm;