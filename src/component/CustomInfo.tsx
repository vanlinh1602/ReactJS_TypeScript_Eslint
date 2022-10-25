import React from "react";
import {UserInfo} from "../models/userInfo";


const CustomInfo : React.FC<UserInfo> = ({ name, age }: UserInfo) => {
    return (
        <div style={{backgroundColor: 'red', width: 200, margin: 20}}>
            <p>Name: {name}</p>
            <p>Age : {age} </p>
        </div>
    );
}

export default CustomInfo;

