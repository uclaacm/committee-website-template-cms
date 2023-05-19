import Image from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import WordmarkLogo from '../public/acm-logo-wordmark-extended.png';
import discord from '../public/discord.png';
import email from '../public/email.png';
import instagram from '../public/instagram.png';
import styles from '../styles/Footer.module.scss';
import WordmarkLogo from '../public/acm-logo-wordmark-extended.png';
import discord from '../public/discord.png';
import email from '../public/email.png';
import instagram from '../public/instagram.png';
import styles from '../styles/Footer.module.scss';

export default function Footer() {
  return (
    <footer>
      <section className={styles.socials}>
        <section className={styles.footerlogo}>
          <Link href="/">
            <a>
              <Image src={WordmarkLogo} width={100} height={40} alt="Logo" />
            </a>
          </Link>
        </section>
        <section className={styles.footerlogo}>
          <a
            href="https://www.instagram.com/acm.ucla"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={instagram}
              width={25}
              height={25}
              alt="Instagram Icon"
            />
          </a>
        </section>
        <section className={styles.footerlogo}>
          <a
            href="https://discord.com/invite/eWmzKsY"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={discord} width={30} height={25} alt="Discord Icon" />
          </a>
        </section>
        <section className={styles.footerlogo}>
          <a
            href="mailto: acm@ucla.edu"
            target="_blank"
            rel="noreferrer"
            className={styles.mailanchor}
          >
            <Image src={email} width={25} height={20} alt="Email Icon" />
          </a>
        </section>
      </section>
      <section className={styles.credit}>
        <span>
          Made by{' '}
          <Link
            href="https://www.uclaacm.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACM at UCLA
          </Link>
          , with{' '}
          <Link
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </Link>
        </span>
      </section>
    </footer>
  );
}
