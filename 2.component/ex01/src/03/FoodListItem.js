import React from "react";

function FoodListItem({ name, count }) {
    return (
        <li>
            {name}: {count}
        </li>
    );
}

export default FoodListItem;
