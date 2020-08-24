import React from "react";
import classes from './Profile.module.css'

const Profile = () => {
    return (
        <div className={ classes.profile }>
            <div className={ classes.avatar }>
            </div>

            <div className={ classes.description }>
                <h3 className={ classes.name }>Иван Петров</h3>
                <h4 className={ classes.city }>Город: Москва</h4>
                <h4 className={ classes.birthday }>Дата рождения: 20.04.2001</h4>
            </div>

            <div className={ classes.options }>
                <div className={ classes.option }><a href="#!">Настройки профиля</a></div>
                <div className={ classes.option }><a href="">Выйти</a></div>
            </div>
        </div>
    )
}

export default Profile