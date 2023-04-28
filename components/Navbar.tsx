import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import WordmarkLogo from '../public/acm-logo-wordmark-extended.png';
import styles from '../styles/Navbar.module.scss';

export default function Navbar() {
  const [clicked, setClicked] = useState(false);
  return (
    <div>
      <nav className={styles.navbar}>
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
        <div>
          <ul
            className={styles['nav-item-list']}
            id={clicked ? styles.active : ''}
          >
            <li>
              <Link href="/">
                <a>about</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>blog</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>dev</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>team</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>curriculum</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>events</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <button>Join Us</button>
              </Link>
            </li>
          </ul>
        </div>
        <div id={styles['small-screen']}>
          <i onClick={() => setClicked(!clicked)}>
            {clicked ? <FaTimes /> : <FaBars />}
          </i>
        </div>
      </nav>
    </div>
  );
}
