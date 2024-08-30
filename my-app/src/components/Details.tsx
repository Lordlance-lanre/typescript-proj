import {ReactEventHandler, useState} from 'react';


const Details = () =>{
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    // let data : {username: string, password: string};

    const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setUsername(e.target.value)
    }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setPassword(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) =>{
        e.preventDefault();
       const data = {
           username: username,
           password: password 
        }
        console.log("data>>", data);

    }

    return(
        <div>
            <input type="text" value={username} placeholder='username' onChange={handleUsername}/>
            <input type="password" value={password} placeholder='password' onChange={handlePassword} />

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Details;