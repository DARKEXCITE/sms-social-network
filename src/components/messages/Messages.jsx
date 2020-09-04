import React from "react";
import classes from './Messages.module.css'
import Dialogs from "./dialogs/Dialogs";
import Dialog from "./dialog/Dialog";

const Messages = (props) => {
    return (
        <div className={ classes.messages }>
            <div className={ classes.search }>
                <input type="text" placeholder="Поиск"/>
            </div>

            <div className={ classes.messagesWindow }>
                <Dialogs dialogs={ props.messagesState.dialogs } />
                <Dialog messages={ props.messagesState.messages } />
            </div>
        </div>
    )
}

export default Messages