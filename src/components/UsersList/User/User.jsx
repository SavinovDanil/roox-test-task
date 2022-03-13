import React from 'react'
import styles from './User.module.scss'
import {Link} from 'react-router-dom'

const User = ({user}) => {
    return (
        <li className={styles.userItem}>
            <p>ФИО: <span>{user.name}</span> </p>
            <p>Город: <span>{user.address.city}</span> </p>
            <p>Компания: <span>{user.company.name}</span> </p>
            <Link to={`/user/${user.id}`} className={styles.userDescriptionLink}>Подробнее</Link> 
        </li>
    )
}

export default User