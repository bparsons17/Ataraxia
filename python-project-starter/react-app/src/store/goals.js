const SET_GOAL = "goal/setGoal";
const GET_GOAL = "goal/getGoal";
const REMOVE_GOAL = "goal/removeGoal";


const setGoal = (goal) => ({
    type: SET_GOAL,
    payload: goal,
  });


const getGoal = (goal) => ({
    type: GET_GOAL,
    payload: goal,
  });
const removeGoal = (goalId) => ({
    type: REMOVE_GOAL,
    payload: goalId,
  });
  
  export const seeGoal = () => async (dispatch) => {
    const res = await fetch("/api/goals/");
    const data = await res.json();
    dispatch(getGoal(data.goals));
  };
  export const createGoal = ({
    title,
    description,
    steps,
    deadline,
    userId,
  }) => async (dispatch) => {
    const res = await fetch("/api/goals/", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        steps,
        deadline,
        userId,
      }),
    });
    const data = await res.json();
    console.log(data)
    dispatch(setGoal(data));
  };

  export const deleteGoal = (goalId) => async (dispatch) => {
    const res = await fetch(`/api/goals/${goalId}`, {
      method: "DELETE",
    });
    
    const deleted = await res.json();
    console.log(deleted)
    dispatch(removeGoal(deleted))
  };

  const initialState = { goal: null };

  function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case GET_GOAL:
            return { ...state, goal: action.payload };
        case SET_GOAL: {
            if (state.goal) {
                const newGoal = [...state.goal, action.payload];
                return { ...state, goal: newGoal };
        }
        return { ...state, goal: action.payload };
      }
       case REMOVE_GOAL: 
          const newGoalsArray = state.goal.filter(item => {
            return item.id !== action.payload.id
          })
          return {...state, goal: newGoalsArray}
      
      default:
        return state;
    }
  }
  
  export default reducer;