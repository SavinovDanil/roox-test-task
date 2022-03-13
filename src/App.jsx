import React, {useEffect, useState} from 'react'
import { Routes, Route} from "react-router-dom";
import axios from 'axios';

import styles from './App.module.scss';
import Sidebar from './components/Sidebar/Sidebar';
import UsersList from './components/UsersList/UsersList';
import ProfileList from './components/ProfileList/ProfileList';

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchApi() {
      setLoading(true)
      let response = await axios.get('https://jsonplaceholder.typicode.com/users').then(({data}) => data)
      setLoading(false)
      setUsers(response)
    }
    fetchApi()
  }, [])


  
  const sortFunc = (sortName) => {   
    const clone = [...users]
    setUsers(clone.sort(byField(sortName)))
  }
  
  const byField = (sortName) => {
    switch (sortName){
      case 'city':
        return (a, b) => a.address.city > b.address.city ? 1 : -1
      case 'company':
        return (a, b) => a.company.name > b.company.name ? 1 : -1;  
      default:
        return null
    }
  }

  return (
    <div className={styles.container}>
      <Sidebar sortFunc = {sortFunc} />
      <Routes>
        <Route path='/' element={<UsersList users = {users} loading={loading}/>}/> 
        <Route path='/user/:id' element={<ProfileList users = {users} loading={loading}/>}/> 
      </Routes>
    </div>
  );
}

export default App;
