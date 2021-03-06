﻿import {Link} from "react-router-dom";
import React, { useState } from 'react';
import './LobbySetting.css';


function LobbySetting() {
    
    const [text,setText] = useState("");
    const [lines, setLines] = useState(["Tar : Hello Guys!"]);

    const onTextChange = (event) => {
        setText(event.target.value);
    };

    const onSend = () => {
        setLines(line => [...lines,"ME : " + text]);
        setText("")
    }
   
    return (
        <div className="LoadingSetting col-12">
            <div className="LoadingSetting-header">
                <div className="LoadingSetting-profile-read-ju-on">
                </div>
                <div className="LoadingSetting-RoomName">
                    Room Ju-on
                </div>
                <div className="LoadingSetting-RoomID">
                    RID 123456
                </div>
                <Link to="/Profile_Tar">
                <div className="LoadingSetting-profile-read-tar">
                </div></Link>
                <div className="LoadingSetting-profile-read-pruek">
                </div>
                <div className="LoadingSetting-profile-read-phai">
                </div>
            </div>
            <div className="LoadingSetting-chatroom">
                {
                    lines.map(x=>{
                        return <div className="LoadingSetting-chatroom-text">
                            {x}
                        </div>
                    })
                }
                <div className="Private">
                    <h1>Private Room</h1>
                </div>
                <div className="AllowHint">
                    <h1>AllowHint</h1>
                </div>
                <div className="AllowJoin">
                    <h1>Allow to Join between game</h1>
                </div>
                <div className="PlayerName">
                    <h1>Show player's name</h1>
                </div>
                
                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round">
                    </span>
                </label>

                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round">
                    </span>
                </label>

                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round">
                    </span>
                </label>

                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round">
                    </span>
                </label>

            </div>
            <div className="LoadingSetting-textbox">
                <Link to="/App">
                <div className="LoadingSetting-Botton col-1">
                    <img src="botton.png"/>
                </div></Link>
                <input type="text" placeholder="Type Ready to Start!" className="LoadingSetting-textbox-input col-9" value = {text} onChange={onTextChange}/>
                <div className="LoadingSetting-textbox-send col-2" onClick={onSend}>Send!</div>
            </div>
        </div>
    );
}
export default LobbySetting;