import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import styles from './ProfileList.module.scss'
import Profile from './Profile/Profile'
import Loader from '../Loader/Loader'


const ProfileList = () => {
    const {id} = useParams()
    const [user, setUser] = useState({}) 
    const [loading, setLoading] = useState(null)
    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        async function fetchedUser() {
            setLoading(true)
            const resp = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(({data}) => data)
            setUser(resp)
            setLoading(false)
        }
        fetchedUser()
    }, [id])


    return (
        <div className={styles.profile}>
            <div className={styles.profileHeaderBlock}>
                <h1 >Профиль пользоваетля</h1>
                <button onClick={() => setDisabled(false)}>Редактировать</button>
            </div>
            {loading === false ? <Profile user={user} disabled={disabled} /> : <Loader /> }
        </div>
    )
}
export default ProfileList