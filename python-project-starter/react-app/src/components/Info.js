import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal } from "antd";
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


        <Modal
          visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={[
            ,
            <button key="submit" type="submit" onClick={handleOk} onSubmit={onGoalUpdate}>
              Close </button>,

          ]}
        >
          <form onSubmit={onGoalUpdate}>
            <div className="column_border">
              <label for="title" className="flex text-sm font-medium text-gray-400">Goal</label>
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
              <label for="description" className="flex text-sm font-medium text-gray-400">Description</label>
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
              <label for="steps" className="flex text-sm font-medium text-gray-400">Steps</label>
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
              <label for="deadline" className="flex text-sm font-medium text-gray-400">Accomplish by</label>
              <input
                className="input shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                name="goal_deadline"
                placeholder={goal.deadline}
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
            </div>
            <div className='update' >
              <button className='modal_btns' type='primary' type='submit'>Update Goal</button>

            </div>

          </form>
        </Modal>
        <div className='x-button edit ' >
          <div onClick={showModal} className='border-2 p-1 rounded-sm m-2 border-gray-400 p-1 text-gray-200'>Edit</div>
          <button onClick={deleteOneGoal}>
            <svg className='hover:bg-indigo-800 hover:text-indigo-300' fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" /></svg>
          </button>
        </div>

      </div>
    )
  )
}

export default Info;