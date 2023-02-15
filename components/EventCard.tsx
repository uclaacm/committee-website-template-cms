import Image from 'next/image';
import React from 'react';
import styles from '../styles/EventCard.module.scss';

interface CardInterface {
  header: string;
  body: string;
  time: string;
}
function EventCard({ header, body, time }: CardInterface) {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.text}>
          <div className={styles.header}>{header}</div>
          <div className={styles.body}>{body}</div>
          <p className={styles.time}>
            <div>
              <Image src="/icons8-calendar-24.png" width={20} height={20} />
            </div>
            <div>&nbsp;{time}</div>
          </p>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
