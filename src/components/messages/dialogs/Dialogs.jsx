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
                <span className={ classes.message }>Привет, как дела?</span>
            </div>
        </div>
    )
}

const Dialogs = (props) => {
    const dialogsElements = props.dialogs.map(item => {
        return <DialogsItem name={ item.name } id={ item.id } />
    })

    return (
        <div className={ classes.dialogs }>
            { dialogsElements }
        </div>
    )
}

export default Dialogs