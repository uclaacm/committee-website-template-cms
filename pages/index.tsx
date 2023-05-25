import type { NextPage } from 'next';
import MainLayout from '../components/MainLayout';
import styles from '../styles/landing.module.scss';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div>
        <div className={styles.masthead}>
          <div className={styles['masthead-text']}>
            <div className={styles.heading}>
              <h1 className={styles.title}>
                ACM&nbsp;
                <span className={styles['committee-name']}>Teach LA</span>
              </h1>
              <h2 className={styles.lead}>making coding accessible</h2>
            </div>
            <p className={styles.description}>
              ACM Teach LA pairs UCLA students with schools in Los Angeles to
              provide free computer science classes. Our goal is to empower all
              students with the ability to code, and use it to make a
              difference.
            </p>
            <a className={styles['cta-btn']} href="#">
              Join Us
            </a>
          </div>
        </div>
        {/* <div className={styles['main-section']}>
          <h1 className={styles.content}>INSERT CONTENT HERE</h1>
        </div> */}
      </div>
    </MainLayout>
  );
};

export default Home;
