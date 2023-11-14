// import Image from 'next/image' 
// import styles from './page.module.css'
import AddUsers from './Components/Addusers'
import DisplayUsers from './Components/DisplayUsers'

export default function Home() {
  return (
    <>
    <div>
      <AddUsers/>
      <DisplayUsers/>
    </div>
    </>
  )
}
