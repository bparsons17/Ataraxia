const SET_POST = "post/setPost";
const GET_POST = "post/getPost";
const REMOVE_POST = "post/removePost";
const UPDATE_POST = "posts/UPDATE_POST";


const updatePosts = (post) => {
  return {
    type: UPDATE_POST,
    post,
  };
};


const setPost = (post) => ({
    type: SET_POST,
    payload: post,
  });

  const getPost = (post) => ({
    type: GET_POST,
    payload: post,
  });

  const removePost = (postId) => ({
    type: REMOVE_POST,
    payload: postId
  })

  export const seePost = () => async (dispatch) => {
    const res = await fetch("/api/posts/");
    const data = await res.json();
    dispatch(getPost(data.posts));
  };

  export const setLike = (id) => async (dispatch) => {
    const { postId } = id
    const res = await fetch(`/api/posts/${postId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const data = await res.json();
    console.log(data)
    dispatch(updatePosts(data));
    return res
  };


  export const createPost = ({
    postText,
    userId,
    id
  }) => async (dispatch) => {
    const res = await fetch("/api/posts/", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postText,
        userId,
        id
      }),
    });
    console.log(res)
    const data = await res.json();
    console.log(data)
    dispatch(setPost(data));
  };

  export const deletePost = (postId) => async (dispatch) => {
    const res = await fetch(`/api/posts/${postId}`, {
      method: "DELETE",
    })
    const deleted = await res.json();
    dispatch(removePost(deleted))
  }

  export const updatePostLikes = (like) => async (dispatch) => {
    const { postId } = like;
    const response = await fetch(`/api/posts/${postId}`);
    if (response.ok) {
      const res = await response.json();
      dispatch(updatePosts(res));
    }
    return response;
  };
  


  const initialState = {};

  function reducer(state = initialState, action) {
    
    switch (action.type) {
        case GET_POST:
            return { ...state, post: action.payload };
        case SET_POST: {
            if (state.post) {
                const newPost = [...state.post, action.payload];
                return { ...state, post: newPost };
        }
        return { ...state, post: action.payload };
      }
       case REMOVE_POST: 
          const newPostsArray = state.post.filter(item => {
            return item.id !== action.payload.id
          })
          return {...state, post: newPostsArray}
        case UPDATE_POST:
            const newPosts = { ...state };
            const index = action.post.id;
            newPosts[index] = action.post;
            return newPosts;
      default:
        return state;
    }
  }
  
  export default reducer;