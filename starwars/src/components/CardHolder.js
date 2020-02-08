import React, {useState} from "react";
import Card from "./Card";

const CardHolder = ({props}) => {
    console.log('card holder', props)
    const [card, newCard] = useState();
    return (
        <div>
            {props.map ( x => {
                return (
                    <Card props = {x} />
                )
            })}
        </div>
    );
};

export default CardHolder;