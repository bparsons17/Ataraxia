import React, { useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import { createComment } from '../store/comments'
import { message } from 'antd';
import { useParams } from "react-router-dom";


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


    const onCommentCreation = async (e) => {
        e.preventDefault();
        if (!commentText) {
          error();
          return;
        }
        dispatch(createComment(commentText, userId, postId ),[])
    }

    return (
        <div>
            <form className="commentform" onSubmit={onCommentCreation}>
        <input
          className='comment-form'
          placeholder='Add a comment'
          onChange={(e) => setCommentText(e.target.value)}
        ></input>
        <button type='submit' className='comment-form__button'>
          Post
        </button>
      </form>
        </div>
    )
}

export default CommentForm;