import React from 'react';
import BoardCard from '../components/BoardCard';
import MainLayout from '../components/MainLayout';
import MemCard from '../components/MemCard';
import styles from '../styles/Teampage.module.scss';

export default function OtherPage() {
  return (
    <MainLayout>
      <div className={styles.main}>
        <h1 className={styles.title}>Team</h1>

        <div>
          <h2 className={styles.subtitle}>Board</h2>
          <p className={styles.description}>
            Our directors, school leads, and curriculum leads. Feel free to
            reach out to any of our board for more information about what we do!
          </p>
          <div className={styles.boardgrid}>
            {/* 2 per row */}
            <div className={styles.card}>
              <BoardCard
                imageURL="/profile.png"
                name="Name"
                pronouns="pronouns"
                position="position"
                github="github"
                email="email"
              />
            </div>
            <div className={styles.card}>
              <BoardCard
                imageURL="/profile.png"
                name="Name"
                pronouns="pronouns"
                position="position"
                github="github"
                email="email"
              />
            </div>
            <div className={styles.card}>temp</div>
            <div className={styles.card}>temp</div>
          </div>
        </div>

        <div>
          <h2 className={styles.subtitle}>General Members</h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className={styles.gmgrid}>
            {/* 3 per row */}
            <div className={styles.card}>
              <MemCard
                imageURL="/profile.png"
                name="Name"
                position="position"
              />
            </div>
            <div className={styles.card}>
              <MemCard
                imageURL="/profile.png"
                name="Name"
                position="position"
              />
            </div>
            <div className={styles.card}>temp</div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
