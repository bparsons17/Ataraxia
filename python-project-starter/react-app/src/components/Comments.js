import React, {useState,useEffect} from "react";
import './comments.css'

import {useSelector, useDispatch} from 'react-redux'
import { seeComments } from "../store/comments";



const Comment = (props) => {

  const comments = useSelector((state)=> state.comment.comment)
  console.log(props) 
  const [isLoaded,setIsLoaded] = useState(false)
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch()

  
  useEffect(()=> {
      dispatch(seeComments()).then(()=> {
        setIsLoaded(true)
      })
    },[])
  



  return (
    <>
      { isLoaded &&
        comments.filter(com=> com.postId === props.postId).map((comment) => (
          <div key={comments.id} className='comments__container'>
            <div className='comments__user-comment'>
              <div className='comment_username'>{comment.username}   </div>
              <div className='comment_content'>{comment.commentText}</div>
              
              {/* <div className='comment__content'>{comment.commentText}</div> */}
            </div>
            <hr class="border-gray-700"></hr>
          </div>


        ))}

        </>
    )
};
export default Comment;