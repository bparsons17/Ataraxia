import React, { useState } from "react";
import {createPost} from '../store/posts'
import { useDispatch, useSelector } from "react-redux";
import { message } from 'antd';
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
          <div>
              <form onSubmit={onPostCreation}>
                  <div>{sessionUser.username}</div>
                  <div>
                      <label for='postText'>Post</label>
                      <input
                      name='post_text'
                      type='text'
                      value={postText}
                      onChange={(e)=> setPostText(e.target.value)} 
                      />
                  </div>
                  <div>
                      <button type='submit'>Create post</button>
                  </div>
              </form>
          </div>
      )







}

export default PostForm;