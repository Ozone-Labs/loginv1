import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/Login.module.css'

const Signup = () => {
  return (
    <>
      <Head>
        <title>this is sign page</title>
      </Head>
      <div className={styles.MainContainer}>
        <div className={styles.head}>
          <h2>--Sign up--</h2>
        </div>
        <br />
        <form action="#" method="post" className={styles.divform}>
          <div className={styles.inputCont}>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="enter user id"
              required
            />
            <input
              type="text"
              name="class"
              id="class"
              placeholder="enter your class"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email"
            />
            <select name="disign" id="design">
              <option value="select">--select--</option>
              <option value="teacher">teacher</option>
              <option value="student">Student</option>
            </select>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="enter password 1"
              required
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="enter password 2"
              required
            />
          </div>
          <div className={styles.btnCont}>
            <button>
              <Link href="/login"> Login</Link>
            </button>
            <button>signup</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Signup
