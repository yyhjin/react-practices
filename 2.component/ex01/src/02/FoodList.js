import React from "react";
import FoodListItem from "./FoodListItem";

function FoodList({ foods }) {
    // const foodItems = [];
    // foods.forEach((food) => {
    //     foodItems.push(<FoodListItem name={food.name} count={food.count}/>);
    // });

    // const a1 = [1, 2, 3];
    // const a2 = a1.map((e) => {
    //     return e*e;
    // });
    // console.log(a2);

    return (
        <ul>
            {foods.map((food) => (
                <FoodListItem
                    key={food.no}
                    name={food.name}
                    count={food.count}
                />
            ))}
        </ul>
    );
}

export default FoodList;
