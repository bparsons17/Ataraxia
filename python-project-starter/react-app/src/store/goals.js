const SET_GOAL = "goal/setGoal";

const setGoal = (goal) => ({
    type: SET_GOAL,
    payload: goal,
  });
  
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
    console.log(res, 'kjsjsjsjsjjsjssjjsjsjsj')
    console.log('lslslslslslsls')
    const data = await res.json();
    console.log(data)
    dispatch(setGoal(data));
  };

  const initialState = { goal: null };

  function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
      case SET_GOAL: {
        if (state.goal) {
          const newGoal = [...state.goal, action.payload];
          return { ...state, goal: newGoal };
        }
        return { ...state, goal: action.payload };
      }
      default:
        return state;
    }
  }
  
  export default reducer;