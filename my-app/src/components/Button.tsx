import React, {useState} from 'react';

type ButtonProps = {
    handleClick: (event : React.MouseEvent<HTMLButtonElement>, id:number) => void
}

const Button = (props: ButtonProps) =>{
    return(
        <div>
            <button onClick={(event) =>props.handleClick(event, 2)} >Button Clicked</button>
        </div>
    )
}

export default Button;