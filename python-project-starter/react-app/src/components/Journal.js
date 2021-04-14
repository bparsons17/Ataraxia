import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { seeJournal } from '../store/journals'
import JournalEdit from '../components/JournalEdit'

const Journal = ({ id }) => {
    const dispatch = useDispatch();
    const sessionJournals = useSelector((state) => state.journal.journal)
    const [isLoaded, setIsLoaded] = useState(false)

    console.log(sessionJournals)

    useEffect(() => {
        dispatch(seeJournal()).then(() => {
            setIsLoaded(true)
        })
    }, [])

    // console.log(sessionJournals)

    return (
        <div className='yug'>
            <h1 className='header-tag text-gray-200'>Journal Board</h1>{isLoaded &&
            sessionJournals.map((journal) => (
                <div key={journal.id} className='wrapper2 border-l-2 border-r-2 border-gray-600'>
                    <div class="flex flex-shrink-0 p-4 pb-0 justify-center"> 
                            <div class="flex  flex-column ">
                                <div class="ml-3 flex flex-column w-full">
                                   
                                    <div class="text-base font-bold text-gray-200 flex-shrink float-right">
                            {journal.currentDate}
                                    </div>
                        
                                    
                                </div>
                                
                            </div>
                        
                    </div>
                    <div class="pl-10 pr-10">
                    <div class="text-base leading-6 font-bold text-gray-200">
                                        
                        <span class="text-sm leading-5 font-bold text-gray-200 ">
                            Mood: {journal.mood}
                        </span>
                    </div>

                        <div class="flex">
                            <div class="w-full">

                                <div class="spacing flex justify-end items-center leading-6  text-gray-200 space-around">
                                     Your Entry: {journal.text}
                                
                                    <JournalEdit journal={journal} />
                                        
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