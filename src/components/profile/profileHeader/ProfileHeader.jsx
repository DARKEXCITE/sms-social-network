import React from "react";
import classes from './ProfileHeader.module.css'

const ProfileHeader = () => {
    return (
        <div className={ classes.profileHeader }>
            <div className={ classes.avatar }>
            </div>

            <div className={ classes.description }>
                <h3 className={ classes.name }>Владимир Пудинг</h3>
                <h4 className={ classes.city }>Город: Москва</h4>
                <h4 className={ classes.birthday }>Дата рождения: 07.09.1952</h4>
            </div>

            <div className={ classes.options }>
                <div className={ classes.option }><a href="#!">Настройки профиля</a></div>
                <div className={ classes.option }><a href="#!">Выйти</a></div>
            </div>
        </div>
    )
}

export default ProfileHeader