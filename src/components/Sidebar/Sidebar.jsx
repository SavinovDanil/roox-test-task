import React from 'react'
import styles from './Sidebar.module.scss'
import {Link} from 'react-router-dom'

const Sidebar = ({sortFunc}) => {
    return (
    <div className={styles.sortBlock}>
        <h3 >Сортировка</h3> 
        <button onClick={() => sortFunc('city')} >По городу</button>
        <button onClick={() => sortFunc('company')} >По компании</button>
        <Link to={'/'}>Вернуться на главную</Link>
      </div>
    )
}
export default Sidebar