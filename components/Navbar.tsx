import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import WordmarkLogo from '../public/acm-logo-wordmark-extended.png';
import styles from '../styles/Navbar.module.scss';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link href="/">
          <a className="force-child-display-block">
            <Image
              src={WordmarkLogo}
              width={106}
              height={40}
              alt="Open Source at ACM Home"
            />
          </a>
        </Link>
      </div>
      <div className="navbar-items">
        <div className="navbar-link">
          <Link href="/">
            <a className={styles.navlink}>about</a>
          </Link>
        </div>
        <div className="navbar-link">
          <Link href="/">
            <a className={styles.navlink}>blog</a>
          </Link>
        </div>
        <div className="navbar-link">
          <Link href="/">
            <a className={styles.navlink}>dev</a>
          </Link>
        </div>
        <div className="navbar-link">
          <Link href="/">
            <a className={styles.navlink}>team</a>
          </Link>
        </div>
        <div className="navbar-link">
          <Link href="/">
            <a className={styles.navlink}>curriculum</a>
          </Link>
        </div>
        <div className="navbar-link">
          <Link href="/eventsPage">
            <a className={styles.navlink}>events</a>
          </Link>
        </div>
        <div className="navbar-link">
          <Link href="/">
            <a id={styles.joinlink}>Join Us</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
