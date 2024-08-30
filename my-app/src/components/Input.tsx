import { useState } from "react";

type InputProps = {
    value: string,
    handleChange : (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputFile = ({value, handleChange}: InputProps) =>{
    return(
        <div>
            <input value={value} onChange={(event) => handleChange} type="text" />
        </div>
    )
}

export default InputFile;