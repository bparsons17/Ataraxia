import React, { useState } from "react";
import { createGoal } from '../store/goals'
import { useDispatch, useSelector } from "react-redux";
import { message } from 'antd';
import './style/goalform.css'




const GoalForm = ({userId}) => {
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
        message.error("Please enter a goal title!");
      };


    const [title, setTitle] = useState("");
    const [deadline, setDeadline] = useState(getCurrentDate);
    const [steps, setSteps] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();

    const onGoalCreation = async (e) => {
        e.preventDefault();
        if (!title) {
          error();
          return;
        }
    
        dispatch(
          createGoal({
            title,
            deadline,
            userId,
            steps,
            description,
          })
        );
      };

      return (
          <div className="outside">
              <div className="task_size">

            
              <form className='form' onSubmit={onGoalCreation}>
                <div className='background2'>
                    <div className="column_border">
                    <label for="description" className="flex text-sm font-medium text-gray-300">Goal</label>
                        <input
                        className="input shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                        name="goal_name"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        />
                        </div>
                        <div className="column_border">
                        <label for="description" className="flex text-sm font-medium text-gray-300">Goal Date</label>
                        <input
                        className="input shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                        name="deadline"
                        type="date"
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                        />
                    </div>
                    <div className="column_border">
                    <label for="description" className="flex text-sm font-medium text-gray-300">Steps</label>
                        <textarea
                        className="input shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                        name="Steps"
                        type="textarea"
                        value={steps}
                        onChange={(e) => setSteps(e.target.value)}
                        />
                    </div>
                    <div className="column_border">
                    <label for="description" className="flex text-sm font-medium text-gray-300">Description</label>
                        <div className='mt-1'>
                            <textarea
                            className="input shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                            name="description"
                            type="textarea"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex flex-row justify-center">
                        <button className="goal_submit_button " type="submit">
                        Set Goal
                        </button>
                    </div>
              </div>
              </form>
              </div>
          </div>
      )
}

export default GoalForm;