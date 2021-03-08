import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Drawer, Tag, Button } from "antd";
import { deleteGoal } from "../store/goals";


const Info = ({ goal }) => {
    const [visible, setVisible] = useState(false);
    const [editVisibility, setEditVisibility] = useState(false);
    const dispatch = useDispatch();

    const goalId = goal.id;
    console.log(goalId)


    async function deleteOneGoal() {
        await dispatch(deleteGoal(goal.id))
    }

    const showDrawer = ({ goal }) => {
        setVisible(true);
      };

      const onClose = () => {
        setVisible(false);
        setEditVisibility(false);
      };

    return (
        goal !== undefined && (
            <div>
                <Button onClick={showDrawer}>more info</Button>
            
            <Drawer
             title="Goal Menu"
             placement="right"
             onClose={onClose}
             visible={visible}
             width={"50vh"}
             height={"100%"}
             bodyStyle={{
               backgroundColor: "white",
               display: "flex",
               flexDirection: "column",
             }}
           >
           <Button onClick={deleteOneGoal}>Delete</Button>

           </Drawer>
           </div>
        )
    )
}

export default Info;