import React from "react";
import styles from "./assets/css/Task.css";

const Task = ({ no, name, done, changeTaskDone, deleteTask }) => {
    return (
        <li className={styles.TaskList__Task}>
            <input
                type="checkbox"
                checked={done === "Y"}
                onChange={(e) => {
                    changeTaskDone(no, e.target.checked ? "Y" : "N");
                }}
            />
            {name}
            <a
                href="#"
                className={styles.TaskList__Task__remove}
                onClick={(e) => {
                    e.preventDefault();
                    deleteTask(no);
                }}
            />
        </li>
    );
};

export default Task;
