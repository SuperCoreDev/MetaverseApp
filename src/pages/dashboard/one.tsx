/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// next
import Head from 'next/head';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useRef,ReactNode,useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { Container, Button ,Typography,SelectChangeEvent,Select,MenuItem,Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import NftOverView from 'src/layouts/dashboard/market_overview/nftOverview';
import Walletpanel from 'src/layouts/dashboard/Walletpanel';
import DappsView from 'src/layouts/dashboard/market_overview/dappsview';
import Chart from '../../components/marketChartView'
// layouts
import DashboardLayout from '../../layouts/dashboard';
// components
import { useSettingsContext } from '../../components/settings';
import Metaverse from '../../layouts/dashboard/market_overview/metaverse';
// ----------------------------------------------------------------------
import styles from '../../styles/one.module.scss';




PageOne.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;


type StyledButtonProps = {
  bg : 'string',
  color : 'string'
}
const StyledButton = styled(Button , {
  shouldForwardProp:(prop) => prop !== 'bg' && prop !== 'color'})<StyledButtonProps>(({bg , color}) => ({
 
          background: bg,
          color,
          borderRadius: '50px',
          padding:'4px 24px',
          textAlign: 'center',
          border: 'solid 1px gray',
          fontSize:'14px',
          fontWeight : 500,
          '@media (max-width:700px)' :{
              fontSize:'13px'
          },
          '&:hover':{
              background:'#23b3e5',
              border:'none'
          },
 
}))

// ----------------------------------------------------------------------
export default function PageOne() {
  // const { themeStretch } = useSettingsContext();
  const [classifyLabel , setClassifyLable] = useState(0);
  const [chartViewoption, setOptionChart] = useState(10 as ReactNode);
    const handleChange = (event: SelectChangeEvent) => {
        setOptionChart(event.target.value as ReactNode);
    };
  useEffect(()=>{
    onMarketOverviewClassyHandler(0)
  },[])
  const ref = useRef<HTMLDivElement>(null);
  const onMarketOverviewClassyHandler = (idx:number) => {
    
    setClassifyLable(idx);
    if(ref.current){
      const children = ref.current.children;
      Array.from(children).forEach((child) => {
        child.classList.remove('highlight');
        child.removeAttribute('style');
      })
      
      const child = children.item(idx) as HTMLElement;
      if (child !== null && child !== undefined) {
        child.classList.add('highlight');
        child.style.backgroundColor = '#D96BFF';
        child.style.color = 'black';
      }
    }
    
  }
  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    if(mainRef.current)
    {
      mainRef.current.style.marginTop = '0'
      mainRef.current.style.transition = '1s ease'
    }
  },[])
  return (
    <>
      <Head>
        <title> Dashboard </title>
      </Head>
      {/* <Container maxWidth={themeStretch ? false : 'xl'}>  */}
      <Stack ref={mainRef} width='100%' sx={{ paddingLeft: '8px', paddingRight: '16px'  , marginTop:'100%'}}>
        <div className={styles.OneWrapper}>
          <div className={styles.StatisticWrapper}>
            <div className={styles.descriptionboard}>
              <span className={styles.subject}>Welcome</span>
              <span className={styles.description}>Lorem ipsum dolor mati fatruz Lorem ipsum dolor mati fatruz</span>
            </div>
            <div className={styles.MarketOverviewWrapper}>
              <div className={styles.MarketOverviewContainer}>
                <div ref={ref} className={styles.ClassifyButtons}>
                  <StyledButton color='white' onClick={(e)=> onMarketOverviewClassyHandler(0)}>Metaverse</StyledButton>
                  <StyledButton color='white' onClick={(e)=> onMarketOverviewClassyHandler(1)}>NFTs</StyledButton>
                  <StyledButton color='white' onClick={(e)=> onMarketOverviewClassyHandler(2)}>DApps</StyledButton>
                  <StyledButton color='white' onClick={(e)=> onMarketOverviewClassyHandler(3)}>Blockchain</StyledButton>
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
                  {classifyLabel === 0 ? (<Metaverse/>) :
                  classifyLabel === 1 ? (<NftOverView />) : classifyLabel === 2 ? (<DappsView/>) : (<></>)
                }
                </div>
                </div>
              </div>
            </div>
            <Walletpanel />
          </div>
        </Stack>
      </>
      );
}
