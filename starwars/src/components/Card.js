import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
        margin: 100px;
        border: 1px solid black;
    `;
const Name = styled.span`
        text-decoration: underline;
    `;


const Card = props => {
    console.log("card props", props)
    return (
        <CardDiv>
            <Name>Name: {props.props.name}</Name>
            <p>Birth Year: {props.props.birth_year}</p>
            <p>Height: {props.props.height}</p>
        </CardDiv>
        );
}

export default Card;
