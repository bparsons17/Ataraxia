import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postLike } from '../store/postLike'


const PostLike = ({postId}) => {
    const [isLiked, setIsLiked] = useState(false)
    const sessionUser = useSelector((state) => state.session.user)
    const dispatch = useDispatch();


    const likeHandler = () => {
        const like = { userId: sessionUser.id, postId: postId }
        console.log(like)
        setIsLiked(!isLiked);
        dispatch(postLike(like));
    };

    return (
        <div class="flex-1 text-center"> {}
            <button href="#" class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-indigo-800 hover:text-indigo-300" onClick={() => likeHandler()}>

               {isLiked ? <svg class="text-center h-7 w-6 fill-current text-green-600"  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg> : <svg class="text-center h-7 w-6 text-green-600"  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>} 
            </button>
        </div>
    )
}

export default PostLike;

