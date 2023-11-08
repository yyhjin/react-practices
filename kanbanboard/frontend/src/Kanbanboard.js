import React, { useState, useEffect } from "react";
import styles from "./assets/css/KanbanBoard.css";
import CardList from "./CardList";

const KanbanBoard = () => {
    const [cards, setCards] = useState(null);

    const fetchCards = async () => {
        try {
            const response = await fetch("/api/card", {
                method: "get",
                headers: {
                    Accept: "application/json",
                },
            });

            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if (json.result !== "success") {
                throw new Error(`${json.result} ${json.message}`);
            }

            setCards(json.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchCards();
    }, []);
    return cards ? (
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
    ) : (
        <></>
    );
};

export default KanbanBoard;
