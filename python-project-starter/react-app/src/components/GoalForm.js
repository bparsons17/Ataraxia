import React, { useState } from "react";
import { createGoal } from '../store/goals'
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, message, Button } from "antd";


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

    const onTaskCreation = async (e) => {
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
          <div>
              <Row>
            <Col span={7}>
              <h4>Title</h4>
            </Col>

            <Col span={5}>
              <h4>Description</h4>
            </Col>

            <Col span={5}>
              <h4>Steps</h4>
            </Col>

            <Col span={5}>
              <h4>Deadline</h4>
            </Col>
            
            <Col span={4}>
              <h4>Actions</h4>
            </Col>

         
          </Row>
              <form onSubmit={onTaskCreation}>
              <Col span={7} className="column_border">
                <input
                  className="goal_title"
                  name="goal_name"
                  type="text"
                  placeholder="Enter a Goal name"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                </Col>
                <Col span={5} className="column_border">
                <input
                  className="due_date"
                  name="due_date"
                  type="date"
                  placeholder="2021-03-07"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                />
              </Col>
              <Col span={5} className="column_border">
                <input
                  className="steps"
                  name="Steps"
                  type="textarea"
                  placeholder="steps"
                  value={steps}
                  onChange={(e) => setSteps(e.target.value)}
                />
              </Col>
              <Col span={5} className="column_border">
                <input
                  className="desciption"
                  name="description"
                  type="textarea"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Col>
              <Col span={4} className="column_border">
                <button className="goal_submit_button" type="submit">
                  Set Goal
                </button>
              </Col>
              </form>
          </div>
      )
}

export default GoalForm;