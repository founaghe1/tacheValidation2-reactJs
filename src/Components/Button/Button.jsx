import React from "react";


export const Button = (props) =>{
    return(
        <button className={props.className}> {props.Name} {props.span} </button>
    )
}