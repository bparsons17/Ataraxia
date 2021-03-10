import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { seeJournal } from '../store/journals'


const Journal = ({ id }) => {
    const dispatch = useDispatch();
    const sessionJournals = useSelector((state) => state.journal.journal)

    console.log(sessionJournals)

    useEffect(() => {
        dispatch(seeJournal())
    }, [])

    // console.log(sessionJournals)

    return (
        <div className='yug'>Journal Board{sessionJournals &&
            sessionJournals.map((journal) => (
                <div className='header p-10'>
                    <div className='journal_entry card max-w-sm rounded overflow-hidden shadow-lg'>
                    
                        <h3 className='card2'>Your Entry</h3>
                        
                
                        <div className="card_info text-gray-700 text-base">Date Created: {journal.currentDate}</div>
                        <div className="card_info text-gray-700 text-base">How you were feeling: {journal.mood}</div>
                        <div className="card_info text-gray-700 text-base">
                            <div className='p'>Your entry:</div>
                            <div className='card_info2'>{journal.text} </div> 
                        </div>
                        <div className='button_div inline-block mr-2 mt-2'>
                            <button type="submit" className="button focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-gradient-to-r from-purple-400 to-purple-600 transform hover:scale-110">Edit</button>

                        </div>


                    </div>

                </div>

            ))}</div>

    )
}

export default Journal;