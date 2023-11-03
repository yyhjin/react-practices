import React from "react";
import styles from "./assets/css/KanbanBoard.css";
import CardList from "./CardList";
import cards from "./assets/json/data";

const KanbanBoard = () => {
    return (
        <div className={styles.KanbanBoard}>
            <CardList
                key={"To Do"}
                title={"To Do"}
                cards={cards.filter((card) => card.status === "ToDo")}
            />
            <CardList
                key={"Doing"}
                title={"Doing"}
                cards={cards.filter((card) => card.status === "Doing")}
            />
            <CardList
                key={"Done"}
                title={"Done"}
                cards={cards.filter((card) => card.status === "Done")}
            />
        </div>
    );
};

export default KanbanBoard;
