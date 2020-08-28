import React from "react";
import classes from './ProfilePost.module.css'

const ProfilePost = (props) => {
    return (
        <div className={ classes.post }>
            <div className={ classes.header }>
                <div className={ classes.avatar }>
                </div>

                <h4 className={ classes.name }>Иван Петров</h4>
            </div>


            <div className={ classes.text }>
                { props.message }
            </div>
        </div>
    )
}

export default ProfilePost