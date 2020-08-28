import React from "react";
import classes from './Profile.module.css'
import ProfileNewPost from "./profileNewPost/ProfileNewPost.jsx";
import ProfileHeader from "./profileHeader/ProfileHeader.jsx";
import ProfilePost from "./profilePost/ProfilePost.jsx";

const Profile = () => {
    return (
        <div className={ classes.profile }>
            <ProfileHeader />

            <ProfileNewPost />

            <div className={ classes.posts }>
                <ProfilePost message="My name is Ivan, i'm live in Moscow!"/>

                <ProfilePost message="Hello world!"/>
            </div>
        </div>
    )
}

export default Profile