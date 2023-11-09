/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// next
import Head from 'next/head';
import NextLink from 'next/link'
import Image from 'next/image';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useRef, ReactNode, useState, useCallback, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Icon } from '@iconify/react';
import { Container, Typography, Stack, Box, TextField, InputAdornment, Link, Grid , Tabs, Tab} from '@mui/material';
import NextBreadcrumbs from 'src/components/NextBreadCrumbs';
// layouts
import DashboardLayout from 'src/layouts/dashboard/DashboardLayout';

import Button from '@mui/material/Button';

import Overview from './overview';
import Features from './Features';
import MonthlyCost from './MonthlyCost';
import Nearby from './Nearby';
import Floorplan from './Floorplan';
import Images from './Images';
import Booking from './Booking';

import PriceHistory from './PriceHistory';
import Scrollbar from 'src/components/scrollbar/Scrollbar';
import useResponsive from 'src/hooks/useResponsive';

const Bar = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  color: '#4A4D52',

  // Media query for responsive mode
  '@media (max-width: 837px)': {
    flexDirection: 'column',
  },
})

const Comp = styled('div')({
  display: 'flex',
  gap: '20px',
  flexDirection: 'row',

  // Media query for responsive mode
  '@media (max-width: 837px)': {
    'justifyContent': 'space-between'
  },
})
interface ButtonProps {
  bgColor: string;
  color: string;
  fontSize: number | undefined;
}
const CButton = styled('button') <ButtonProps>`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Neue Haas Grotesk Display Pro';
  font-size: ${(props) => props.bgColor}px;
  font-weight: 600;
  line-height: 17px;
  text-align: center;
  background-color: ${(props) => props.bgColor};
  border-radius: 18px;
  border-color: transparent;
  color: ${(props) => props.color};
`;
const IconsButton = styled('div')({
  width:'24px',
  height:'24px',
  
  transition: 'width 0.3s ease-in-out,height 0.5s cubic-bezier(0.215, 0.61, 0.355, 1),transform 1s linear',

  '&:hover':{
      width:'48px',
      height:'48px',
      transform : 'translate(-24,-24)',
  }
})
type ListTextProps = { content: string, color: string }
const ListText = ({ content, color }: ListTextProps) => (
    (
        <Stack direction='row' alignItems='center' gap="8px">
            <Icon icon="material-symbols-light:circle" color={color} width="8" height="8" />
            <Typography color={color}>{content}</Typography>
        </Stack>

    )
)
type CardWrapperProps = {
  src: string
}
export const CardWrapper = ({ src }: CardWrapperProps) => (

  <Stack direction='column' padding='14px' gap="17px" 
      sx={{ borderRadius: '16px', border: '1px solid #4A4D52', background: '#202324' , minWidth:'295px'}}>
      <Box position='relative' width='inherit'>
          <Image src={src} alt="SFR" width={393} height={208} />
          <Box position='absolute' top={15} left={19}>
              <Stack direction='row'  height={48} justifyContent='center' alignItems='center' padding='8px' gap='20px' borderRadius='4px' sx={{ background: 'rgba(12, 13, 14, 0.20)' }}>
                  <IconsButton><Icon icon="tabler:capture" color="white" width="100%" height="100%" /></IconsButton>
                  <IconsButton><Icon icon="material-symbols-light:share-outline" color="white" width="100%" height="100%" /></IconsButton>
                  <IconsButton><Icon icon="material-symbols-light:bookmark-outline" color="white" width="100%" height="100%" /></IconsButton>
                  <IconsButton><Icon icon="uiw:like-o" color="white" width="100%" height="100%" /></IconsButton>
              </Stack>
          </Box>
      </Box>
      <Stack direction='column' sx={{ width: '100%' }}>
          <Stack direction='column' gap="2px"
              sx={{
                  // padding: '24px 20px 10px 20px',
              }}>
              <Typography color='white' fontSize={20} fontWeight={700}>Single Family Residential</Typography>
              <Box sx={{ width: '100%', height: '1px', background: '#94979E' }} />
              <Stack direction='column'>
                  <ListText color='#94979E' content="Built in 1989" />
                  <ListText color='#94979E' content="Electric, heat pump" />
                  <ListText color='#94979E' content="Central air" />
                  <ListText color='#94979E' content="2 garage spaces" />
                  <ListText color='#94979E' content="9,466sqft" />
                  <ListText color='#94979E' content="2% buyers agency fee" />
              </Stack>
              <Box sx={{ width: '100%', height: '1px', background: '#94979E' }} />
              <Typography fontSize={32} fontWeight={700} color='white'>$197</Typography>
              <Typography color='#94979E'>price/sqft</Typography>
          </Stack>
      </Stack>
  </Stack>
)

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

SingleFamilyResidence.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

export default function SingleFamilyResidence() {
  const isLg = useResponsive('up', 1420)
  const ref = useRef<HTMLDivElement>(null);
  // const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  // const [isHidden, setIsHidden] = useState(true);
  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.style.marginTop = '0'
      mainRef.current.style.transition = '1s ease'
    }
  }, [])
  // Tab 

  const [value, setValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);
  // useEffect(() => {
  //   const handleMouseMove = (event:MouseEvent) => {
  //     event.preventDefault();
  //     const mouseX = event.clientX;
  //     if(!isLg){
  //       if (mouseX >= windowWidth-100) { // Adjust the threshold as needed
  //         setIsHidden(true);
  //       } else {
  //         setIsHidden(false);
  //       }
  //     }else{
  //       setIsHidden(true);
  //     }
  //   };

  //   window.addEventListener('mousemove', handleMouseMove);

  //   return () => {
  //     window.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, [isLg , isHidden , windowWidth]);
  const getDefaultTextGenerator = useCallback((subpath: string) => (
    {
      "buildmetaverse": "Build Metaverse",
      "realestate": "Real Estate",
      "singlefamilyresidence": "Single Family Residence"
    }[subpath]
  ), [])
  const getTextGenerator = useCallback((param: string, query: string) => (
    {
      "buildmetaverse": "Build Metaverse",
      "realestate": "Real Estate",
      "singlefamilyresidence": "Single Family Residence"
    }[param]
  ), []);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    onHandler(0)
  }, [])
  const similarref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (value === 0) {
      if (similarref.current) {
        const currentref = similarref.current
        requestAnimationFrame(() => {
          currentref.style.marginTop = '0'
        })
      }
    }
  }, [value])
  const onHandler = (id: number) => {
    setIndex(id);
    if (ref.current) {
      const children = ref.current?.children;
      Array.from(children).forEach((child) => {
        child.classList.remove('highlight');
        child.removeAttribute('style');
      })

      const child = children.item(id) as HTMLElement;
      if (child !== null && child !== undefined) {
        child.classList.add('highlight');
        child.style.backgroundColor = '#D96BFF';
        child.style.color = 'black';
      }
    }
  }

  return (
    <>
      <Head>
        <title> Single Family Residence </title>
      </Head>
      <Stack ref={mainRef} sx={{
        marginTop: '100%', position: 'relative', width: '100%', color: 'white', fontFamily: "Neue Haas Grotesk Display Pro", padding: '0 32px 32px 32px', gap: '20px'
      }}>
        <Bar>
          <NextBreadcrumbs breadcrumbCase getDefaultTextGenerator={getDefaultTextGenerator} getTextGenerator={getTextGenerator} />
          <Comp>
            <Button style={{ color: 'white', borderColor: '#A3A3A3', borderRadius: '8px' }} startIcon={<Icon icon="ooui:next-rtl" />}>
              Prev
            </Button>
            <Button style={{ color: 'white', borderColor: '#A3A3A3', borderRadius: '8px' }} endIcon={<Icon icon="ooui:next-ltr" />}>
              Next
            </Button>
          </Comp>
        </Bar>
        <Box style={{ position: 'relative' }}>
          <img src='/assets/nfts/MetaverseCards/RealEstate/singlefamily.png' alt='img' height={365} width='100%' />
          <Grid container style={{ position: 'absolute', right: '32px', bottom: '24px', width: '256px' }} spacing={2}>
            <Grid item xs={12}>
              <CButton fontSize={14} bgColor='#F75BB1' color='black'>Buy Now</CButton>
            </Grid>
            <Grid item xs={6}>
              <CButton fontSize={14} bgColor='#000' color='white'>
                Share <Icon icon="bi:share" color="white" width="12" height="12" />
              </CButton>
            </Grid>
            <Grid item xs={6}>
              <CButton fontSize={14} bgColor='#000' color='white'>
                Save <Icon icon="mdi:report-finance" color="white" width="12" height="12" />
              </CButton>
            </Grid>
          </Grid>
        </Box>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', }}>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start', width: `${isLg ? '70%' : '100%'}` }}>
            <Typography sx={{ fontSize: { lg: 56, md: 32, sm: 24 }, fontWeight: 700 }}>Single Family Residence</Typography>

            {/* <div style={{ display: 'flex', flexDirection:'column', padding: '32px 24px 32px 24px', gap: '48px', backgroundColor: '#202324', borderRadius: '16px',width: '100%'}}>
              <Scrollbar sx={{padding:'10px 10px 10px 0px'}}>
                <div ref={ref} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px'}}>
                  <Box sx={{ borderRadius: '32px', cursor:'pointer' , border:'1px solid #2B2E31', backgroundColor: '#1E2121', padding: '12px 18px 12px 18px', whiteSpace: 'nowrap' }} onClick={() => onHandler(0)}>Overview</Box>
                  <Box sx={{ borderRadius: '32px', cursor:'pointer' , border: '1px solid #2B2E31', backgroundColor: '#1E2121', padding: '12px 18px 12px 18px', whiteSpace: 'nowrap' }} onClick={() => onHandler(1)}>Features</Box>
                  <Box sx={{ borderRadius: '32px', cursor:'pointer' , border: '1px solid #2B2E31', backgroundColor: '#1E2121', padding: '12px 18px 12px 18px', whiteSpace: 'nowrap' }} onClick={() => onHandler(2)}>Price History</Box>
                  <Box sx={{ borderRadius: '32px', cursor:'pointer' , border: '1px solid #2B2E31', backgroundColor: '#1E2121', padding: '12px 18px 12px 18px', whiteSpace: 'nowrap' }} onClick={() => onHandler(3)}>Monthly Cost</Box>
                  <Box sx={{ borderRadius: '32px', cursor:'pointer' , border: '1px solid #2B2E31', backgroundColor: '#1E2121', padding: '12px 18px 12px 18px', whiteSpace: 'nowrap' }} onClick={() => onHandler(4)}>Nearby Buildings</Box>
                  <Box sx={{ borderRadius: '32px', cursor:'pointer' , border: '1px solid #2B2E31', backgroundColor: '#1E2121', padding: '12px 18px 12px 18px', whiteSpace: 'nowrap' }} onClick={() => onHandler(5)}>Floor plan</Box>
                  <Box sx={{ borderRadius: '32px', cursor:'pointer' , border: '1px solid #2B2E31', backgroundColor: '#1E2121', padding: '12px 18px 12px 18px', whiteSpace: 'nowrap' }} onClick={() => onHandler(6)}>Images</Box>
                  <Box sx={{ borderRadius: '32px', cursor:'pointer' , border: '1px solid #2B2E31', backgroundColor: '#1E2121', padding: '12px 18px 12px 18px', whiteSpace: 'nowrap' }} onClick={() => onHandler(7)}>Book Appointment</Box>
                </div>
              </Scrollbar>
              {renderElement()}
            </div> */}
            <Box sx={{ width: '100%' ,border: '1px solid rgb(26, 26, 26)', padding:'32px 24px', borderRadius: '16px'}}>
              <Box sx={{ borderBottom: 1, borderColor: 'transparent' }}>
                <Tabs value={value} onChange={handleTabChange} aria-label="tab">
                  <Tab label="Overview" {...a11yProps(0)} />
                  <Tab label="Features" {...a11yProps(1)} />
                  <Tab label="Price History" {...a11yProps(2)} />
                  <Tab label="Monthly Cost" {...a11yProps(3)} />
                  <Tab label="Nearby Buildings" {...a11yProps(4)} />
                  <Tab label="Floor Plan" {...a11yProps(5)} />
                  <Tab label="Images" {...a11yProps(6)} />
                  <Tab label="Booking Appointments" {...a11yProps(7)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <Overview/>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Features/>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <PriceHistory/>
              </TabPanel>
              <TabPanel value={value} index={3}>
                <MonthlyCost/>
              </TabPanel>
              <TabPanel value={value} index={4}>
                <Nearby/>
              </TabPanel>
              <TabPanel value={value} index={5}>
                <Floorplan/>
              </TabPanel>
              <TabPanel value={value} index={6}>
                <Images/>
              </TabPanel>
              <TabPanel value={value} index={7}>
                <Booking/>
              </TabPanel>
            </Box>
          </div>

          {isLg && <Box sx={{
            display: 'flex', border: '1px solid #1A1A1A', padding: '24px',
            flexDirection: 'column', alignItems: 'flex-start', gap: '16px', height: 'fit-content',
            minWidth: '350px', width: '30%', backgroundColor: '#202324', borderRadius: '16px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', alignSelf: 'stretch' }}>
              <div style={{ color: '#8D8E8D', fontSize: '20px', fontWeight: '500' }}>Price/sqft</div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px', justifyContent: 'space-between' }}>
                <div style={{ color: 'white', fontSize: '32px', fontWeight: '700' }}>$2587</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'stretch', paddingRight: '0px', color: '#1FDD00' }}>
                  0.78ETH
                  <img src='/assets/nfts/MetaverseCards/RealEstate/eth.png' alt="img1" />
                </div>
              </div>
            </div>
            <div style={{ width: '100%', height: '1px', backgroundColor: '#1A1A1A' }}></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', alignSelf: 'stretch' }}>
              <div style={{ color: '#8D8E8D', fontSize: '20px', fontWeight: '500' }}>Buyer agency fee</div>
              <div style={{ color: 'white', fontSize: '32px', fontWeight: '700' }}>
                2%
              </div>
            </div>
            <div style={{ width: '100%', height: '1px', backgroundColor: '#1A1A1A' }}></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', alignSelf: 'stretch' }}>
              <div style={{ color: '#8D8E8D', fontSize: '20px', fontWeight: '500' }}>Land</div>
              <div style={{ color: 'white', fontSize: '32px', fontWeight: '700' }}>
                9466 sqft
              </div>
            </div>
            <Button sx={{ width: '100%', color: 'white', background: 'linear-gradient(264deg, #F75BB1 -6.74%, #C392DC 43.26%, #008782 103.97%)' }}>Book Appointment</Button>
          </Box>}
        </div>
        {value === 0 && (<div ref={similarref} style={{ marginTop: '300px', transition: '1s ease', display: 'flex', padding: '24px', flexDirection: 'column', alignItems: 'flex-start', gap: '16px', height: 'fit-content', width: '100%', backgroundColor: '#202324', borderRadius: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            Similar Properties
            <div style={{ borderRadius: '32px', border: '1px solid #2B2E31', backgroundColor: '#1E2121', padding: '12px 18px 12px 18px', whiteSpace: 'nowrap' }}>View more</div>
          </div>
          <Box  width='100%'>
            <Scrollbar>
              <Stack direction='row' gap="32px" justifyContent='space-between'>
                <CardWrapper src="/assets/images/metaverse/realestate/SFR2.png" />
                <CardWrapper src="/assets/images/metaverse/realestate/SFR3.png" />
                <CardWrapper src="/assets/images/metaverse/realestate/SFR2.png" />
              </Stack>
            </Scrollbar>
          </Box>
        </div>)}

      </Stack>
    </>)
}
