import React, {useEffect} from 'react'
import {connect} from 'react-redux'

import { fetchUsers } from '../redux/userActions'


const UserList = ({userData, fetchUsers})=>{

    useEffect(()=>{
        fetchUsers()
    }, [])

    if(userData?.loading) return <div>Loading...</div>
    if(userData?.error) return <div>Error...{userData.error}</div>
    console.log({userData})
    return(
        <div>
            {userData?.map((user)=>(
                <h3>{user.name}</h3>
            ))}
        </div>
    )
}


const mapStateToProps = state => {
    return {
        userData: state.users
    }
}


const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)