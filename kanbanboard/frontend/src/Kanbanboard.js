import React from "react";
import data from "./assets/json/data";

function Kanbanboard(props) {
    const cardsTodo = data.filter(function (card) {
        return card.status === "ToDo";
    });
    const cardsDoing = data.filter((card) => {
        return card.status === "Doing";
    });
    const cardsDone = data.filter((card) => {
        return card.status === "Done";
    });

    console.log(cardsTodo);
    console.log(cardsDoing);
    console.log(cardsDone);

    return (
        <div>
            Kanbanboard
            {/* <CardList Title="ToDo" cards={cardsTodo} /> */}
        </div>
    );
}

export default Kanbanboard;
