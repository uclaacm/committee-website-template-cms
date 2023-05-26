import MainLayout from '../components/MainLayout';
import styles from '../styles/landing.module.scss';
import { GetStaticProps } from 'next';
import getCommitteeInfo from '../scripts/landing-page-generator.mjs';

interface Committee{
  committee: string;
  name: string;
  subtitle: string;
  description: string;
  logoLink: string;
  dcLink: string;
  igLink: string;
  email: string;
  color: string;
}

interface Props{
  committee: Committee;
  idName: string;
}

export default function Home({ committee }: Props): JSX.Element {
  return (
    <MainLayout>
      <div>
        <div className={styles.masthead}>
          <div className={styles['masthead-text']}>
            <div className={styles.heading}>
              <h1 className={styles.title}>
                ACM&nbsp;
                <span className={styles['committee-name']}>{committee.name}</span>
              </h1>
              <h2 className={styles.lead}>{committee.subtitle}</h2>
            </div>
            <p className={styles.description}>
              {committee.description}
            </p>
            <a className={styles['cta-btn']} href="#">
              Join Us
            </a>
          </div>
        </div>
        <div className={styles['main-section']}>
          <h1 className={styles.content}>INSERT CONTENT HERE</h1>
        </div>
      </div>
    </MainLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const committee = await getCommitteeInfo('Studio');
  return {
    props: {
      committee: committee,
    },
    revalidate: 3600,
  };
};