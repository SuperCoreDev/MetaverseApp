/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// next
import Head from 'next/head';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useRef,ReactNode,useState } from 'react';
import { Icon } from '@iconify/react';
import { Container, Typography,SelectChangeEvent,Select,MenuItem } from '@mui/material';
import NftOverView from 'src/layouts/dashboard/market_overview/nftOverview';
import Walletpanel from 'src/layouts/dashboard/Walletpanel';
import Chart from '../../components/marketChartView'
// layouts
import DashboardLayout from '../../layouts/dashboard';
// components
import { useSettingsContext } from '../../components/settings';
import Metaverse from '../../layouts/dashboard/market_overview/metaverse';
// ----------------------------------------------------------------------
import styles from '../../styles/one.module.scss';
import DappsView from 'src/layouts/dashboard/market_overview/dappsview';



PageOne.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

// ----------------------------------------------------------------------
export default function PageOne() {
  // const { themeStretch } = useSettingsContext();
  const [classifyLabel , setClassifyLable] = useState('Metaverse');
  const [chartViewoption, setOptionChart] = useState(10 as ReactNode);
    const handleChange = (event: SelectChangeEvent) => {
        setOptionChart(event.target.value as ReactNode);
    };
  const ref = useRef<HTMLDivElement>(null);
  const onMarketOverviewClassyHandler = (e: React.MouseEvent<HTMLDivElement> , label:string) => {
    e.preventDefault();
    let childlist = null;
    if (ref.current) childlist = ref.current.querySelectorAll(`.${styles.mcbtn}`);
    console.log(childlist);
    childlist?.forEach((element) => {
      element.className = `${styles.mcbtn}`;
    });
    e.currentTarget.className += ` ${styles.selected}`;
    setClassifyLable(label);
  }

  return (
    <>
      <Head>
        <title> Dashboard </title>
      </Head>
      {/* <Container maxWidth={themeStretch ? false : 'xl'}>  */}
      <div style={{ paddingLeft: '8px', paddingRight: '16px' }}>
        <div className={styles.OneWrapper}>
          <div className={styles.StatisticWrapper}>
            <div className={styles.descriptionboard}>
              <span className={styles.subject}>Welcome</span>
              <span className={styles.description}>Lorem ipsum dolor mati fatruz Lorem ipsum dolor mati fatruz</span>
            </div>
            <div className={styles.MarketOverviewWrapper}>
              <div className={styles.MarketOverviewContainer}>
                <div ref={ref} className={styles.ClassifyButtons}>
                  <div className={`${styles.mcbtn} + ${styles.selected}`} onClick={(e)=> onMarketOverviewClassyHandler(e, 'Metaverse')}>Metaverse</div>
                  <div className={styles.mcbtn} onClick={(e)=> onMarketOverviewClassyHandler(e, 'NFTS')}>NFTs</div>
                  <div className={styles.mcbtn} onClick={(e)=> onMarketOverviewClassyHandler(e, 'DAPPS')}>DApps</div>
                  <div className={styles.mcbtn} onClick={(e)=> onMarketOverviewClassyHandler(e, 'Metaverse')}>Blockchain</div>
                </div>
                <div className={styles.MarketOverview}>
                  <span className={styles.MarketOverview__header}> Metaverse Market Overview </span>
                  <div className={styles.MarketOverview__circumInfo}>
                    <div className={styles.circumInfo_BoxContainer}>
                      <div className={styles.circumInfo_BoxContainer__BOX}>
                        <div className={styles.circumInfo_BoxContainer__curcuminfoblock}>
                          <span className={styles.circumInfo_BoxContainer__circumdesc}>UAW</span>
                          <Icon icon="material-symbols:info-outline" color="gray" />
                        </div>
                        <div className={styles.circumInfo_BoxContainer__curcumvalblock}>
                          <span className={styles.MarketOverview__header} style={{ color: "white" }}>439</span>
                          <span className={styles.fontPercent}>+34%</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.circumInfo_BoxContainer}>
                      <div className={styles.circumInfo_BoxContainer__BOX}>
                        <div className={styles.circumInfo_BoxContainer__curcuminfoblock}>
                          <span className={styles.circumInfo_BoxContainer__circumdesc}>Volume</span>
                          <Icon icon="material-symbols:info-outline" color="gray" />
                        </div>
                        <div className={styles.circumInfo_BoxContainer__curcumvalblock}>
                          <span className={styles.MarketOverview__header} style={{ color: "white" }}>$20.99k</span>
                          <span className={styles.fontPercent} style={{ color: 'red' }}>-56.40%</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.circumInfo_BoxContainer}>
                      <div className={styles.circumInfo_BoxContainer__BOX}>
                        <div className={styles.circumInfo_BoxContainer__curcuminfoblock}>
                          <span className={styles.circumInfo_BoxContainer__circumdesc}>Transaction</span>
                          <Icon icon="material-symbols:info-outline" color="gray" />
                        </div>
                        <div className={styles.circumInfo_BoxContainer__curcumvalblock}>
                          <span className={styles.MarketOverview__header} style={{ color: "white" }}>1.37k</span>
                          <span className={styles.fontPercent}>+36.97%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.MarketOverview__chartoptionboard}>
                    <Select
                      sx={{
                        '.MuiOutlinedInput-notchedOutline': {
                          borderColor: '#2B2E31',
                        },
                      }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      onChange={handleChange}
                      value={chartViewoption}
                      style={{ color: "white" }}
                    >
                      <MenuItem value={10}>
                        <div style={{ display: "flex", gap: "16px", flexDirection: "row", alignItems: "center", paddingRight: "60px" }}>
                          Last 7 days
                        </div>
                      </MenuItem>
                      <MenuItem value={20}>
                        <div style={{ display: "flex", gap: "16px", flexDirection: "row", alignItems: "center", paddingRight: "60px" }}>
                          Last 1 month
                        </div>
                      </MenuItem>
                      <MenuItem value={30}>
                        <div style={{ display: "flex", gap: "16px", flexDirection: "row", alignItems: "center", paddingRight: "60px" }}>
                          Last 1 year
                        </div>
                      </MenuItem>
                    </Select>
                    <div className={styles.chartoptionlist}>
                      <div className={styles.chartoptionlist__chartcolor} style={{ backgroundColor: '#D100BC' }}><></></div>
                      <span className={styles.fontPercent} style={{ color: 'white' }}>Volume</span>
                      <div className={styles.chartoptionlist__chartcolor} style={{ backgroundColor: '#08A0D8' }}><></></div>
                      <span className={styles.fontPercent} style={{ color: 'white' }}>UAW</span>
                      <Icon icon="uil:focus" color="gray" width="24" height="24" />
                    </div>
                  </div>
                  <Chart />
                  {classifyLabel === 'Metaverse' ? (<Metaverse />) :
                  classifyLabel === 'NFTS' ? (<NftOverView />) : classifyLabel === 'DAPPS' ? (<DappsView/>) : (<></>)
                }
                </div>
                </div>
              </div>
            </div>
            <Walletpanel />
          </div>
        </div>
      </>
      );
}
