// src/pages/components/Login.js
import React from 'react';
import { useRef } from 'react';
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';
import styles from './Login.module.css'; // Import your CSS module

const Login = () => {
  const lemailRef = useRef();
  const lpasswordRef = useRef();
  const router = useRouter();

  const login = (e) => {
    e.preventDefault();

    const email = lemailRef.current.value;
    const password = lpasswordRef.current.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // signed in
        const user = userCredential.user;
        alert("Login Successful!");
        router.push('/components/GiphySearch');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <div className={styles.container}>
      <center>
        <h1 className={styles.title}>Login</h1>
        <form className={styles.form} onSubmit={login}>
          <input type="email" placeholder="Enter your Email Address" ref={lemailRef} className={styles.input} />
          <input type="password" placeholder="Enter your password" ref={lpasswordRef} className={styles.input} />
          <button type="submit" className={styles.button}>Login</button>
        </form>
      </center>
    </div>
  );
};

export default Login;
