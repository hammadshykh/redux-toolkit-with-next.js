'use client'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addUser } from "../Redux/slice"
import Link from "next/link"

export default function AddUsers(){
    const [name, setName] = useState()

    const dispatch = useDispatch()

    const userDispatch = ()=>{
        console.log(name)
        dispatch(addUser(name))
        setName('')

    }

    return(
        <div className="add-user">
            <h3>User List</h3>
            <div>
                <input type="text" placeholder="Add new user" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
                <button className="add-user-btn" onClick={userDispatch}>Add User</button>
                <Link href="/removeUser">Remove users</Link>
        </div>
    )
}