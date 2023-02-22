import Head from 'next/head'
import React from 'react'
import styles from '../styles/Login.module.css'

const Login = () => {
  return (
    <>
    <Head>
      <title>this is login page</title>
    </Head>
    <div className={styles.MainContainer}>
      <div className={styles.head}><h2>--Login--</h2></div>
      <br />
        <form action="#" method="post" className={styles.divform}>
      <div className={styles.inputCont}>
      <input type="text" name="username" id="username" placeholder='enter user id' required/>
      <input type="password" name='password' id='password' placeholder='enter password' required/>
      </div>
      <div className={styles.btnCont}>
        <button>login</button>
        <button ><a href="/signup"> SignUp</a></button>

      </div></form>
    </div>
  </>)
}

export default Login