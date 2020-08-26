import React from "react";
import classes from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={ classes.dialogs }>
            <div className={ classes.dialog }>
                <div className={ classes.avatar }></div>

                <div className={ classes.dialogInfo }>
                    <h5 className={ classes.name }>Ольга Тиханова</h5>
                    <span className={ classes.message }>Привет</span>
                </div>
            </div>
            <div className={ classes.dialog }>
                <div className={ classes.avatar }></div>

                <div className={ classes.dialogInfo }>
                    <h5 className={ classes.name }>Ольга Тиханова</h5>
                    <span className={ classes.message }>Привет</span>
                </div>
            </div>
            <div className={ classes.dialog }>
                <div className={ classes.avatar }></div>

                <div className={ classes.dialogInfo }>
                    <h5 className={ classes.name }>Ольга Тиханова</h5>
                    <span className={ classes.message }>Привет</span>
                </div>
            </div>
        </div>
    )
}

export default Dialogs