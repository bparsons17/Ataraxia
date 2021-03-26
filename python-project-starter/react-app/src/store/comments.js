const SET_COMMENT = "comment/setComment";
const GET_COMMENT = "comment/getComment";
const REMOVE_COMMENT = "comment/removeComment";


const setComment = (comment) => ({
    type: SET_COMMENT,
    payload: comment,
  });
  
  const getComment = (comment) => ({
    type: GET_COMMENT,
    payload: comment,
  });

  const removeComment = (comment) => ({
    type: REMOVE_COMMENT,
    payload: comment
  })

  export const seeComments = () => async (dispatch) => {
    const res = await fetch("/api/comments/");
    const data = await res.json();
    dispatch(getComment(data.comments));
  };

  export const createComment = (
      
      commentText,
      userId,
      postId
  ) => async (dispatch) => {
    const res = await fetch("/api/comments/", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          commentText,
          userId,
          postId,
          
        }),
      });
      const data = await res.json();
      console.log(data)
      dispatch(setComment([data]));
  }


  export const getCommentId = (id) => async (dispatch) => {
    const res = await fetch(`/api/comments/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const data = await res.json();
    console.log(data)
    dispatch(getComment(data));
  };

  export const deleteComment = (commentId) => async (dispatch) => {
    console.log('hit')
    const res = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    })
    console.log(res)
    const deleted = await res.json();
    console.log(deleted)
    dispatch(removeComment(deleted))
  }


  const initialState = { comment: null};

  function reducer(state = initialState, action) {
    
    switch (action.type) {
        case GET_COMMENT:
            return { ...state, comment: action.payload };
        case SET_COMMENT: {
            if (state.comment) {
                const newComment = [...state.comment, action.payload];
                return { ...state, comment: newComment };
        }
        return { ...state, comment: action.payload };
      }
       case REMOVE_COMMENT: 
          const newCommentsArray = state.comment.filter(item => {
            return item.id !== action.payload.id
          })
          return {...state, comment: newCommentsArray}
      
      default:
        return state;
    }
  }
  
  export default reducer;