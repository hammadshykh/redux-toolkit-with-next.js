'use client'
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "../Redux/slice"
import Link from "next/link"

const RemoveUser = ()=>{
    const userData = useSelector(({ users }) => users);
    const dispatch = useDispatch();
  
    const removeUserHandler = (id) => {
      dispatch(removeUser(id));
    };
    console.log(userData);
    return(
        <div className="add-user">
        <h1>RemoveUser</h1>
        <div>
          {userData.map((v, i) => (
            <>
              <div className="list" key={v.id}>
                <div>{v.name}</div>
                <div>
                  <button onClick={() => removeUserHandler(v.id)}>
                    Remove
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
        <Link href="/">Go to Home</Link>
      </div>
    )
}

export default RemoveUser