import { useState } from "react";

type statusProps = {
    status: 'loading' | 'success' | 'error'
}

const Message = (props: statusProps) =>{
    let message
    if(props.status === 'loading'){
        message = "Loading..."
    }else if(props.status === 'success'){
        message = "Data Fetched Successfully!!"
    }else if (props.status === 'error'){
        message = "Error Data!!"
    }
    return(
        <div>
            <h1>Status - {message}</h1>
        </div>
    )
}

export default Message;