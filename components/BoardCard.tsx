import Image from 'next/image';
import React from 'react';
import styles from '../styles/BoardCard.module.scss';

interface CardInterface {
  imageURL: string;
  name: string;
  pronouns: string;
  position: string;
  github: string;
  email: string;
}

function BoardCard({
  imageURL,
  name,
  pronouns,
  position,
  github,
  email,
}: CardInterface) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={imageURL} alt="PFP" width={70} height={70} />
      </div>
      <div className={styles.text}>
        <div>
          <span className={styles.name}>{name} | </span>
          <span className={styles.pronouns}>{pronouns}</span>
        </div>
        <div>
          <span className={styles.position}>{position}</span>
        </div>
        <div className={styles.smalltext}>
          <Image
            src="/github-mark.png"
            alt="Github Icon"
            width={20}
            height={20}
          />
          <a href={github} style={{ padding: '8px' }}>
            {github}
          </a>
        </div>
        <div className={styles.smalltext}>
          <Image
            src="/icons8-mail-24.png"
            alt="Mail Icon"
            width={20}
            height={20}
          />
          <span style={{ padding: '8px' }}>{email}</span>
        </div>
      </div>
    </div>
  );
}

export default BoardCard;
