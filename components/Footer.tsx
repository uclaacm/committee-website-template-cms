import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import discord from '../public/discord.png';
import instagram from '../public/instagram.png';
import styles from '../styles/Footer.module.scss';

interface CommitteeData {
  committee: string;
  name: string;
  subtitle: string;
  description: string;
  logoLink: string;
  dcLink: string;
  igLink: string;
  email: string;
  favicon: string;
  backgroundImg: string;
}

const Footer = () => {
  const [committeeData, setCommitteeData] = useState<CommitteeData[] | null>(null);

  useEffect(() => {
    const fetchData = () => {
      fetch('../output.json')
        .then((response) => response.json())
        .then((data) => setCommitteeData(data))
        .catch((error) => console.error('Error fetching data:', error));
    };

    fetchData();
  }, []);

  return (
    <footer>
    {committeeData && (
      <section className={styles.socials}>
        <section className={styles.footerlogo}>
          <Link href="/">
            <a>
              <Image src={committeeData[0].logoLink} width={100} height={40} alt="Logo" />
            </a>
          </Link>
        </section>
          <section className={styles.footerlogo}>
            <a href={committeeData[0].igLink} target="_blank" rel="noreferrer">
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
            href={committeeData[0].dcLink}
            target="_blank"
            rel="noreferrer"
          >
            <Image src={discord} width={30} height={25} alt="Discord Icon" />
          </a>
        </section>
        <section className={styles.footerlogo}>
          <a
            href="mailto:acm@ucla.edu"
            target="_blank"
            rel="noreferrer"
            className={styles.mailanchor}
          >
            <Image src={committeeData[0].email} width={25} height={20} alt="Email Icon" />
          </a>
        </section>
      </section>
    )}
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
};

export default Footer;
