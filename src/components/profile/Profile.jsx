import React from "react";
import classes from './Profile.module.css'
import ProfileNewPost from "./ProfileNewPost.jsx";
import ProfileHeader from "./ProfileHeader.jsx";
import ProfilePost from "./ProfilePost.jsx";

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