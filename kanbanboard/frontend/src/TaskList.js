import React, { useState } from "react";
import Task from "./Task";
import styles from "./assets/css/TaskList.css";

const TaskList = ({ tasks }) => {
    return (
        <div>
            <ul>
                {tasks.map((task) => (
                    <Task
                        key={task.no}
                        no={task.no}
                        name={task.name}
                        done={task.done}
                    />
                ))}
            </ul>
            <input
                type="text"
                placeholder={"태스크 추가"}
                className={styles.TaskList__add_task}
            />
        </div>
    );
};

export default TaskList;
