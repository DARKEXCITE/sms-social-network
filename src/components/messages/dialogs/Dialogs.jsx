import React from "react";
import classes from './Dialogs.module.css'
import { NavLink } from "react-router-dom";


const DialogsItem = (props) => {
    return (
        <div className={ classes.dialog }>
            <div className={ classes.avatar }></div>

            <div className={ classes.dialogInfo }>
                <h5 className={ classes.name }>
                    <NavLink to={ "/messages/" + props.id }>{ props.name }</NavLink>
                </h5>
                <span className={ classes.message }>Привет</span>
            </div>
        </div>
    )
}


const Dialogs = (props) => {
    return (
        <div className={ classes.dialogs }>
            <DialogsItem name="Ольга Тиханова" id="1" />
            <DialogsItem name="Петухович" id="2" />
        </div>
    )
}

export default Dialogs