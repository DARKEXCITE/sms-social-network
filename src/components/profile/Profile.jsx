import React from "react";
import classes from './Profile.module.css'
import ProfileNewPost from "./profileNewPost/ProfileNewPost.jsx";
import ProfileHeader from "./profileHeader/ProfileHeader.jsx";
import ProfilePost from "./profilePost/ProfilePost.jsx";

const Profile = (props) => {
    const postsElement = props.profileState.posts.map(item => {
        return <ProfilePost id={ item.id } message={ item.message } />
    })

    return (
        <div className={ classes.profile }>
            <ProfileHeader />

            <ProfileNewPost addPost={props.addPost} />

            <div className={ classes.posts }>
                { postsElement }
            </div>
        </div>
    )
}

export default Profile