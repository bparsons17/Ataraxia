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
            <div className='x-button' onClick={deleteOnePost}>
            <svg className='hover:bg-indigo-800 hover:text-indigo-300' fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"/></svg>
            </div>
        </>
        )
    )
}

export default PostDelete; 