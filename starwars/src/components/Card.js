import React from "react";

const Card = props => {
    console.log("card props", props)
    return (
       `${(props.props.name)}`
    )
}

export default Card;
