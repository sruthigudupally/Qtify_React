import React from 'react';
import {useNavigate} from 'react-router-dom'


export default function Error(){
    let navigate=useNavigate();
    return(
        <div id="error">
            <h1 style={{textAlign:"center"}}>PAge NOt FOUnd</h1>
            <button onClick={()=>navigate("/")} id="bth">BAck To HOme</button>
    
        </div>
    )
}