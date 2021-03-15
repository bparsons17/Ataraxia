const SET_COMMENT = "goal/setComment";
const GET_COMMENT = "goal/getComment";


const setComment = (comment) => ({
    type: SET_COMMENT,
    payload: comment,
  });
  
  const getComment = (comment) => ({
    type: GET_COMMENT,
    payload: comment,
  });

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

  const initialState = { comment: null };

  function reducer(state = initialState, action) {
    let newState;
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
    //    case REMOVE_GOAL: 
    //       const newGoalsArray = state.goal.filter(item => {
    //         return item.id !== action.payload.id
    //       })
    //       return {...state, goal: newGoalsArray}
      
      default:
        return state;
    }
  }
  
  export default reducer;