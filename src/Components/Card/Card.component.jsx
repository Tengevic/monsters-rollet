import { Component } from "react";

import "./Card.styles.css"

const Card = ({monster}) =>{

        const {name, email , id} =monster;
        return(<div key={id} className="card-container">
                    <img alt={`Monster ${name}`} src={`https://robohash.org/${id}?set=set2?size=180*180`}/>
                    <h1>{name}</h1>
                    <p>{email}</p>
                </div>)

}
export default Card;