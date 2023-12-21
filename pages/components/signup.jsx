
import React, { useRef } from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebase";
import { useRouter } from 'next/router';
import styles from './signup.module.css'; 

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      alert('Signup successful');

      // Navigate to the Home page after successful signup
      router.push('/');

    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    }
  };

  return (
    <div className={styles.container}>
      <center>
        <h1 className={styles.title}>Signup</h1> <br /><br />
        <form className={styles.form} onSubmit={handleSignup}>
          <input type="email" placeholder="Enter your Email Address" ref={emailRef} className={styles.input} /><br />
          <input type="password" placeholder="Enter your password" ref={passwordRef} className={styles.input} /><br />
          <button type="submit" className={styles.button}>Signup</button>
        </form>
      </center>
    </div>
  );
};

export default Signup;
