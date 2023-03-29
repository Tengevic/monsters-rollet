import { Component } from "react";
import Card from "../Card/Card.component"

const Cardlist = ({Monsters}) =>{    
   return (<div className="card-list">
    {Monsters.map((Monster) => 
        ( <Card monster={Monster}/>)
    )}          
    </div>)

}
 export default Cardlist;