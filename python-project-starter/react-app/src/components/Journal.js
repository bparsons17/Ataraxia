import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { seeJournal } from '../store/journals'
import JournalEdit from '../components/JournalEdit'

const Journal = ({ id }) => {
    const dispatch = useDispatch();
    const sessionJournals = useSelector((state) => state.journal.journal)

    console.log(sessionJournals)

    useEffect(() => {
        dispatch(seeJournal())
    }, [])

    // console.log(sessionJournals)

    return (
        <div className='yug'>
            <h1 className='header-tag'>Journal Board</h1>{sessionJournals &&
            sessionJournals.map((journal) => (
                <div className='wrapper2 border-l-2 border-r-2 border-gray-600'>
                    <div class="flex flex-shrink-0 p-4 pb-0 justify-center"> 
                            <div class="flex  flex-column ">
                                <div class="ml-3 flex flex-column w-full">
                                   
                                    <div class="text-base  font-medium text-white flex-shrink float-right">
                            {journal.currentDate}
                                    </div>
                        
                                    
                                </div>
                                
                            </div>
                        
                    </div>
                    <div class="pl-10 pr-10">
                    <div class="text-base leading-6 font-medium text-white">
                                        
                        <span class="text-sm leading-5 font-medium text-grey-400 group-hover:text-gray-300 transition ease-in-out duration-75">
                            Mood: {journal.mood}
                        </span>
                    </div>

                        <div class="flex">
                            <div class="w-full">

                                <div class="flex items-center">
                                    <div class="flex-1 text-white border-2 border-indigo-600"> Your Entry: {journal.text}
                                       
                                    </div>
                                        
                                </div>
                            </div>


                        </div>

                    </div>


                    <hr class="border-b-2 border-gray-600"></hr>

                </div>
                
                    

            ))}</div>

    )
}

export default Journal;