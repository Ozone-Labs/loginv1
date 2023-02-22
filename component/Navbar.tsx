import Link from 'next/link'
import React from 'react'
import styles from '../src/styles/HeaderFooter.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      
      <Link href='./signup' className={styles.link}>SignUp</Link>
      <Link href='./login' className={styles.link}>Login</Link>
    </div>
  )
}

export default Navbar