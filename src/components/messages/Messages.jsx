import React from "react";
import classes from './Messages.module.css'
import Dialogs from "./Dialogs";
import Dialog from "./Dialog";

const Messages = () => {
    return (
        <div className={ classes.messages }>
            <div className={ classes.search }>
                <input type="text" placeholder="Поиск"/>
            </div>

            <div className={ classes.messagesWindow }>
                <Dialogs />

                <Dialog />
            </div>
        </div>
    )
}

export default Messages