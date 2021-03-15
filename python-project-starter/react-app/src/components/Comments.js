import React, {useState,useEffect} from "react";

import {useSelector, useDispatch} from 'react-redux'
import { seeComments } from "../store/comments";



const Comment = (props) => {

  const comments = useSelector((state)=> state.comment.comment).filter((com)=> com.postId === props.postId)
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch()

  const [isLoaded,setIsLoaded] = useState(false)
  useEffect(() => {
    if (comments && user) setIsLoaded(true);
    dispatch(seeComments)
  }, [user]);

  return (
    <>
      { isLoaded &&
        comments.map((comment) => (
          <div className='comments__container'>
            <div className='comments__user-comment'>
              <div className='comment__username'>{comment.username}</div>
              <div className='comment__content'>{comment.commentText}</div>
            </div>
          </div>


        ))}

        </>
    )
};
export default Comment;