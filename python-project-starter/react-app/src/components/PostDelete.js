import React from "react";
import { useDispatch } from "react-redux";
import { deletePost, seePost } from '../store/posts'


const PostDelete = ({post}) => {
    const dispatch = useDispatch();
   

    async function deleteOnePost() {
        await dispatch(deletePost(post.id))
    }
   
    return (
        post !== undefined && (
        <>
            <button onClick={deleteOnePost}>balls</button>
        </>
        )
    )
}

export default PostDelete; 