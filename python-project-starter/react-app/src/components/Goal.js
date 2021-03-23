import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { seeGoal } from '../store/goals'
import {Button} from 'antd'
import 'antd/dist/antd.css';
import './style/goal.css'
import Info from '../components/Info'

const Goal = ({id}) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const sessionGoals = useSelector((state) => state.goal.goal)
    

    useEffect(()=> {
        dispatch(seeGoal())
    }, [])

    console.log(sessionGoals)

    return (
    <div className='yug'>{sessionGoals && 
        sessionGoals.map((goal)=> (
            <div class="p-10">  
            <div class="card max-w-sm rounded overflow-hidden shadow-lg">
              <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{goal.title}</div>
                <p class="text-gray-700 text-base">
                  Goal Description: {goal.description}
                </p>
                <p class="text-gray-700 text-base">
                    Steps to complete goal: {goal.steps}

                </p>
                <p class="text-gray-700 text-base">
                    Accoplish by: {goal.deadline}
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                {/* <button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Mark as Completed
                    
                </button> */}
                <button className='rounded-full px-3 py-1'>
                <Info goal={goal}></Info>
                </button>
                
              </div>
            </div>
          </div>
        )) }</div>
    )
}

export default Goal;