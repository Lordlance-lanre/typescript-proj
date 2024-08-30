import { useState } from "react";

type nameListProps = {
    names: {
        first: string,
        last : string
    }[]
}


const Persons = (props: nameListProps) =>{
    return(
        <div>
        {props.names.map(name =>{
            return(
               <div key={name.first}>
                 <h2>{name.first} {name.last}</h2>
               </div>
            )
        })}       
        </div>
    )
}

export default Persons;