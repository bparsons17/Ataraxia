import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { seeGoal } from '../store/goals'
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
    <div>{sessionGoals && 
        sessionGoals.map((goal)=> (
            <div class="p-10">  
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
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
                <Info goal={goal}></Info>
                <button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Mark as Completed</button>
              </div>
            </div>
          </div>
        )) }</div>
    )
}

export default Goal;