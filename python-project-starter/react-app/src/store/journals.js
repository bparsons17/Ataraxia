const SET_JOURNAL = "journal/setJournal";
const GET_JOURNAL = "journal/getJournal";



const setJournal = (journal) => ({
    type: SET_JOURNAL,
    payload: journal,
  });

  const getJournal = (journal) => ({
    type: GET_JOURNAL,
    payload: journal,
  });
  
  export const seeJournal = () => async (dispatch) => {
    const res = await fetch("/api/journals/");
    const data = await res.json();
    dispatch(getJournal(data.journals));
  };



  export const createJournal = ({
    text,
    mood,
    currentDate,
    userId,
  }) => async (dispatch) => {
    const res = await fetch("/api/journals/", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        mood,
        currentDate,
        userId,
      }),
    });
    const data = await res.json();
    console.log(data)
    dispatch(setJournal(data));
  };


  const initialState = { journal: null };

  function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case GET_JOURNAL:
            return { ...state, journal: action.payload };
        case SET_JOURNAL: {
            if (state.journal) {
                const newJournal = [...state.journal, action.payload];
                return { ...state, journal: newJournal };
        }
        return { ...state, journal: action.payload };
      }
      
      default:
        return state;
    }
  }
  
