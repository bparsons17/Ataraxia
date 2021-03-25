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
    console.log(userId)

    const error = () => {
        message.error("Please enter a comment!");
      };
      
    const clearSate = () => {
      setCommentText('')
    }


    const onCommentCreation = async (e) => {
        e.preventDefault();
        if (!commentText) {
          error();
          return;
        }
        dispatch(createComment(commentText, userId, postId ),[])
        await clearSate()
        
    }

    return (
      <form  onSubmit={onCommentCreation}>
        <div className='input-div'>
        <input
          value={commentText}
          className='comment-form'
          placeholder='Add a comment'
          onChange={(e) => setCommentText(e.target.value)}
        ></input>
        <button type='submit' className='comment-form__button'>
          Post
        </button>
        </div>
      </form>
        
    )
}

export default CommentForm;