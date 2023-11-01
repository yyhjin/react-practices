import React from "react";
import data from "./assets/json/data";

function Kanbanboard(props) {
    const cardsTodo = data.filter(function (card) {
        return card.status === "ToDo";
    });
    const cardsDoing = data.filter((card) => {
        card.status === "Doing";
    });

    console.log(cardsTodo);
    // console.log(cardsDoing);

    return (
        <div>
            Kanbanboard
            {/* <CardList Title="ToDo" cards={cardsTodo} /> */}
        </div>
    );
}

export default Kanbanboard;
