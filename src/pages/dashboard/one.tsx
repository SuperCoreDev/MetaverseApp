// next
import Head from 'next/head';
// eslint-disable-next-line import/no-extraneous-dependencies

import { Container, Typography } from '@mui/material';
// layouts
import DashboardLayout from '../../layouts/dashboard';
// components
import { useSettingsContext } from '../../components/settings';
import Metaverse from './market_overview/metaverse';
// ----------------------------------------------------------------------
import styles from '../../styles/one.module.scss';
import Walletpanel from 'src/layouts/dashboard/Walletpanel';

PageOne.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

// ----------------------------------------------------------------------
export default function PageOne() {
  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Head>
        <title> Page One | Minimal UI</title>
      </Head>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <div className={styles.OneWrapper}>
          <div className={styles.StatisticWrapper}>
            <div className={styles.descriptionboard}>
              <span className={styles.subject}>Welcome</span>
              <span className={styles.description}>Lorem ipsum dolor mati fatruz Lorem ipsum dolor mati fatruz</span>
            </div>
            <div className={styles.MarketOverviewWrapper}>
              <div className={styles.MarketOverviewContainer}>
                <div className={styles.ClassifyButtons}>
                  <div className={styles.mcbtn}>Metaverse</div>
                  <div className={styles.mcbtn}>NFTs</div>
                  <div className={styles.mcbtn}>DApps</div>
                  <div className={styles.mcbtn}>Blockchain</div>
                </div>
                <Metaverse />
              </div>
            </div>
          </div>
          <Walletpanel/>
        </div>
      </Container>
    </>
  );
}
