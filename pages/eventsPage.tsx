import React from 'react';
import EventCard from '../components/EventCard';
import MainLayout from '../components/MainLayout';
import styles from '../styles/Events.module.scss';

export default function Test() {
  return (
    <MainLayout>
      <div className={styles.main}>
        <h1 className={styles.title}>Events</h1>
        <p className={styles.description}>
          Event descriptions Event descriptionsEvent descriptionsEvent
          descriptionsEvent descriptionsEvent descriptions Event
          descriptionsEvent descriptionsEvent descriptions
        </p>
        <div>
          <h2 className={styles.subtitle}>Upcoming Events</h2>
          <div className={styles.card}>
            <EventCard
            header = 'Header'
            body = 'body'
            time = 'time'
            /></div>
          <div className={styles.card}>Placeholder card</div>
          <div className={styles.card}>Placeholder card</div>
        </div>
        <div>
          <h2 className={styles.subtitle}>Past Events</h2>
          <div className={styles.card}>Placeholder card</div>
          <div className={styles.card}>Placeholder card</div>
          <div className={styles.card}>Placeholder card</div>
        </div>
      </div>
    </MainLayout>
  );
}
