import React from 'react'
import User from './User/User'
import Loader from '../Loader/Loader'
import styles from './UsersList.module.scss'

const UsersList = ({users, loading}) => {
    return (
    <div className={styles.usersList}>
        <h2>Список пользователей</h2>
        <ul>{loading ? (<Loader />): users.map((user) =><User user={user} key={user.id}/>)}</ul>
    </div>
    )
}

export default UsersList