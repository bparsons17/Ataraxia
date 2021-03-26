import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {  Button, Modal } from "antd";
import 'antd/dist/antd.css';
import { deleteGoal, seeGoal } from "../store/goals";


const Info = ({ goal }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editVisibility, setEditVisibility] = useState(false);
    const [title, setTitle] = useState(goal.title)
    const [description, setDescription] = useState(goal.description)
    const [deadline, setDeadline] = useState(goal.deadline)
    const [steps, setSteps] = useState(goal.steps)
    const dispatch = useDispatch();

    const goalId = goal.id;
    console.log(goalId)

    

    const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };

    
  const onGoalUpdate = async (e) => {
    e.preventDefault();
    goal = { title, steps, description, deadline };
    const res = await fetch(`/api/goals/update/${goalId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(goal),
    });
    const data = await res.json();
    console.log(data)

    dispatch(seeGoal());

  };

    async function deleteOneGoal() {
        await dispatch(deleteGoal(goal.id))
    }

  
    return (
        goal !== undefined && (
            <div>
                <button className="goal_submit_button " type="primary" onClick={showModal}>Update Goal</button>

                <Modal
                  visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={[
                    <Button type='primary' onClick={deleteOneGoal}>Delete</Button>,
                    <Button key="submit" type="primary" onClick={handleOk}>
              Submit Changes </Button>,
  
                  ]}
                >
                    <form onSubmit={onGoalUpdate}>
                        <div className="column_border">
                            <label for="title" className="flex text-sm font-medium text-gray-300">Goal</label>
                            <input
                                className="input shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                                name="goal_name"
                                placeholder={goal.title}
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="column_border">
                            <label for="description" className="flex text-sm font-medium text-gray-300">Description</label>
                            <textarea
                                className="input shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                                name="goal_description"
                                placeholder={goal.description}
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className="column_border">
                            <label for="steps" className="flex text-sm font-medium text-gray-300">Steps</label>
                            <textarea
                                className="input shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                                name="goal_steps"
                                placeholder={goal.steps}
                                type="text"
                                value={steps}
                                onChange={(e) => setSteps(e.target.value)}
                            />
                        </div>
                        <div className="column_border">
                            <label for="deadline" className="flex text-sm font-medium text-gray-300">Accomplish by</label>
                            <input
                                className="input shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                                name="goal_deadline"
                                placeholder={goal.deadline}
                                type="date"
                                value={deadline}
                                onChange={(e) => setDeadline(e.target.value)}
                            />
                        </div>
                        <div>
                            <button type="primary" type='submit'>Update Goal</button>
                        </div>

                    </form>
                </Modal>

            </div>
        )
    )
}

export default Info;