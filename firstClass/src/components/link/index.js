import React from "react";
import './style.css'

export default function Link(props){
    return (
        <div>
            <a  className="link" href= {props.url} target= "blank"> {props.text}</a>
        </div>
    )
}