import { GetStaticProps } from 'next';
import React from 'react';
import BoardCard from '../components/BoardCard';
import MainLayout from '../components/MainLayout';
import MemCard from '../components/MemCard';
import getOfficerData from '../getOfficers';
import styles from '../styles/Teampage.module.scss';

interface Officer {
  id: number;
  position: string;
  name: string;
  pronouns: string;
  email: string;
  github: string;
  imageURL: string;
}

interface Props {
  officers: Officer[];
}

export default function teamPage({ officers }: Props) {
  const officerCards: React.ReactNode[] = [];
  officers.forEach((officer, index) => {
    officerCards.push(
      <div className={styles.card} key={index}>
        <BoardCard
          imageURL={officer.imageURL ?? ''}
          name={officer.name ?? ''}
          pronouns={officer.pronouns ?? ''}
          position={officer.position ?? ''}
          github={officer.github ?? ''}
          email={officer.email ?? ''}
        />
      </div>,
    );
  });

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
            {officerCards}
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
            <div className={styles.card}>
              <MemCard
                imageURL="/profile.png"
                name="Name"
                position="position"
              />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const officers = await getOfficerData('teachla');

  return {
    props: {
      officers,
    },
    revalidate: 3600,
  };
};
