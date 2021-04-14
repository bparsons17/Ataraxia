import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { seeGoal } from '../store/goals'
import { Button } from 'antd'
import 'antd/dist/antd.css';
import './style/goal.css'
import Info from '../components/Info'
import { Route } from 'react-router-dom'

const Goal = ({ user, goal }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const sessionGoals = useSelector((state) => (state.goal.goal))
  console.log(sessionGoals)


  useEffect(() => {
    dispatch(seeGoal())
  }, [])


  console.log(sessionGoals)

  return (
    <div className='yug'>{sessionGoals &&
      sessionGoals.map((goal) => (
        <div key={goal.id} className='wrapper2 border-l-2 border-r-2 border-gray-600'>
          <div class="flex flex-shrink-0 p-4 pb-0 justify-center">
            <div class="flex  flex-column ">
              <div class="ml-3 flex flex-column w-full">

                <h2 class="text-xl font-extrabold text-gray-200 flex-shrink float-right">
                  {goal.title}
                </h2>


              </div>

            </div>

          </div>
          <div class="pl-10 pr-10">
            <div class="text-base leading-6 font-bold text-gray-200">

              <div class="text-sm leading-5 font-bold text-gray-200 py-2">
                Goal Description: {goal.description}
              </div>
            </div>

            <div class="flex">
              <div class="w-full">

                <div className="flex items-center leading-6 text-xl text-gray-200">
                  <div className="flex-1 text-sm leading-5 font-bold text-gray-200 py-2 "> Steps to complete goal: {goal.steps}

                  </div>



                </div>
              </div>

            </div>
            <div className='spacing flex-1 flex  justify-end text-sm leading-5 font-bold text-gray-200' >
              Complete by: {goal.deadline}
              <Info goal={goal} />

            </div>



          </div>


          <hr class="border-b-2 border-gray-600"></hr>

        </div>
        //   <div className='col-1'>
        //     <div key={goal.id} class="idk p-5">  
        //     <div class="card max-w-sm rounded overflow-hidden shadow-lg">
        //       <div class="input-holder px-6 py-4">
        // <div class="title font-bold text-xl mb-2">{goal.title}</div>
        //         <p class="p-tags text-gray-700 text-base">
        //           Goal Description: {goal.description}
        //         </p>
        //         <p class="p-tags text-gray-700 text-base">
        //             Steps to complete goal: {goal.steps}

        //         </p>
        //         <p class="p-tags text-gray-700 text-base">
        //             Accoplish by: {goal.deadline}
        //         </p>
        //       </div>
        //       <div class="px-3 pt-2 pb-2">
        //         {/* <button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Mark as Completed

        //         </button> */}
        //         <div className='btn-holder rounded-full'>
        //         <Info goal={goal}></Info>
        //         </div>

        //       </div>
        //     </div>
        //   </div>
        //    </div>
      ))}
    </div>
  )
}

export default Goal;