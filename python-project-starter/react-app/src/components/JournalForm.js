import React, { useState } from "react";
import { createJournal } from '../store/journals'
import { useDispatch, useSelector } from "react-redux";
import { Redirect,useHistory } from 'react-router-dom'


const JournalForm = ({userId}) => {
    function getCurrentDate() {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        let month = currentDate.getMonth() + 1;
        if (month.toString().length === 1) {
          month = "0" + month;
        }
        const day = currentDate.getDate();
        return `${year}-${month}-${day}`;
      }

      const error = () => {
        console.error("Please enter a goal title!");
      };

    const [text, setText] = useState('')
    const [mood, setMood] = useState('')
    const [date, setDate] = useState(getCurrentDate)
    const dispatch = useDispatch()
    const history = useHistory();

    const onJournalCreation = async (e) => {
        e.preventDefault();
        if (!text) {
          error();
          return;
        }
    
        dispatch(
          createJournal({
            text,
            mood,
            userId,
            date
          })
        );
        history.push('/')
      };

      return (
          <div>
              <form onSubmit={onJournalCreation}>
                  <div>
                  <label for="date" className="flex text-sm font-medium text-gray-300">Date</label>
                  <input
                        className="input shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                        name="date"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}></input>
                  </div>
                  <div>
                  <label for='text' className="flex text-sm font-medium text-gray-300">Journal</label>
                  <textarea
                        className="input shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                        name="text"
                        type="textarea"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        />
                  </div>
                  <div>
                  <label for='mood' className="flex text-sm font-medium text-gray-300">Mood</label>
                  <textarea
                        className="input shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                        name="mood"
                        type="textarea"
                        value={mood}
                        onChange={(e) => setMood(e.target.value)}
                        />
                  </div>
              </form>
          </div>
      )
}

export default JournalForm;