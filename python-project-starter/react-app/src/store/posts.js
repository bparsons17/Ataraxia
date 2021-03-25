const SET_POST = "post/setPost";
const GET_POST = "goal/getPost";
const REMOVE_POST = "goal/removePost";


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

  export const getPostId = (id) => async (dispatch) => {
    const res = await fetch(`/api/posts/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const data = await res.json();
    console.log(data)
    dispatch(getPost(data));
  };


  export const createPost = ({
    postText,
    userId,
  }) => async (dispatch) => {
    const res = await fetch("/api/posts/", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postText,
        userId,
      }),
    });
    console.log(res)
    const data = await res.json();
    console.log(data)
    dispatch(setPost(data));
  };

  export const deletePost = (postId) => async (dispatch) => {
    console.log('hit')
    const res = await fetch(`/api/posts/${postId}`, {
      method: "DELETE",
    })
    console.log(res)
    const deleted = await res.json();
    console.log(deleted)
    dispatch(removePost(deleted))
  }

  const initialState = { post: null };

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
      
      default:
        return state;
    }
  }
  
  export default reducer;