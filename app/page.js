// pages/index.js
import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Giphy App</h1>
      <Link href="/components/signup">
        <div className={styles.link}>Go to Signup Page</div>
      </Link>
      <br />
      <Link href="/components/Login">
        <div className={styles.link}>Go to Login Page</div>
      </Link>
      {/* Other components or content */}
      <div className={styles['created-by']}>
        Developed and Designed By-<br/>
        <p>Used Firebase console for login and signup<br/>
        after that successfully signin giphy page will open</p>
        <p>
          YOGRAJ TRIPATHI<br/>
          GMAIL-yograjtripathi1009@gmail.com<br/>
          Contact-8959372190 Alternate-9685686061<br/>
          student at-OIST Bhopal Final year
          <Link href="https://www.linkedin.com/in/yograj-tripathi-554471255/">LinkedIn Yograj</Link>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
