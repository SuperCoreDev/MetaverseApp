/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// next
import Head from 'next/head';
import NextLink from 'next/link'
// eslint-disable-next-line import/no-extraneous-dependencies
import { useRef, ReactNode, useState, useCallback, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Icon } from '@iconify/react';
import { Container, Typography, Stack, Box, TextField, InputAdornment, Link , Grid} from '@mui/material';
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
import { CardWrapper } from '..';
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
    'justifyContent':'space-between'
  },
})
interface ButtonProps {
  bgColor : string;
  color : string;
  fontSize : number | undefined;
}
const CButton = styled('button')<ButtonProps>`
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

SingleFamilyResidence.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

export default function SingleFamilyResidence() {
  const isLg = useResponsive('up',1420)
  const ref = useRef<HTMLDivElement>(null);
  // const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  // const [isHidden, setIsHidden] = useState(true);
  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    if(mainRef.current)
    {
      mainRef.current.style.marginTop = '0'
      mainRef.current.style.transition = '1s ease'
    }
  },[])
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
      "singlefamilyresidence":"Single Family Residence"
    }[subpath]
  ), [])
  const getTextGenerator = useCallback((param: string, query: string) => (
    {
      "buildmetaverse": "Build Metaverse",
      "realestate": "Real Estate",
      "singlefamilyresidence":"Single Family Residence"
    }[param]
  ), []);
  const [index, setIndex] = useState(0);
  useEffect(()=>{
    onHandler(0)
  },[])
  const similarref = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    if(index === 0){
      if(similarref.current){
        const currentref = similarref.current
        requestAnimationFrame(() => {
          currentref.style.marginTop = '0'
        })
      }
    }
  },[index])
  const onHandler = (id:number) => {
    setIndex(id);
    if(ref.current){
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
  const renderElement = () => {
    switch (index) {
      case 0:
        return <Overview />;
      case 1:
        return <Features />;
      case 2:
        return <PriceHistory/>;
      case 3:
        return <MonthlyCost />;
      case 4:
        return <Nearby />;
      case 5:
        return <Floorplan />;
      case 6:
        return <Images />;
      case 7:
        return <Booking />;
      default:
        return <></>;
    }
  };
  return (
    <>
      <Head>
        <title> Single Family Residence </title>
      </Head>
      <Stack ref={mainRef} sx={{
        marginTop:'100%' , position:'relative' , width: '100%', color: 'white', fontFamily: "Neue Haas Grotesk Display Pro", padding: '0 32px 32px 32px', gap: '20px'
      }}>
        <Bar>
          <NextBreadcrumbs breadcrumbCase getDefaultTextGenerator={getDefaultTextGenerator} getTextGenerator={getTextGenerator}/>
          <Comp>
            <Button  style={{ color: 'white', borderColor: '#A3A3A3', borderRadius: '8px' }} startIcon={<Icon icon="ooui:next-rtl" />}>
              Prev
            </Button>
            <Button  style={{ color: 'white', borderColor: '#A3A3A3', borderRadius: '8px' }} endIcon={<Icon icon="ooui:next-ltr" />}>
              Next
            </Button>
          </Comp>
        </Bar>
        <Box style={{ position: 'relative' }}>
          <img src='/assets/nfts/MetaverseCards/RealEstate/singlefamily.png' alt='img' height={365} width='100%'/>
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
        <div style={{ display: 'flex',flexDirection:'row', gap: '20px' , }}>
        
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start', width: `${isLg ? '70%' : '100%'}`}}>
            <Typography sx={{fontSize : {lg : 56  , md : 32 , sm:24} , fontWeight : 700}}>Single Family Residence</Typography>
            
            <div style={{ display: 'flex', flexDirection:'column', padding: '32px 24px 32px 24px', gap: '48px', backgroundColor: '#202324', borderRadius: '16px',width: '100%'}}>
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
            </div>
            
          </div>

          {isLg && <Box sx={{display:'flex', border:'1px solid #1A1A1A', padding: '24px', 
            flexDirection: 'column', alignItems: 'flex-start', gap: '16px', height: 'fit-content', 
            minWidth: '350px', width:'30%' , backgroundColor: '#202324', borderRadius: '16px'}}>
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
            <Button sx={{width:'100%' , color:'white' , background:'linear-gradient(264deg, #F75BB1 -6.74%, #C392DC 43.26%, #008782 103.97%)'}}>Book Appointment</Button>
          </Box>}
        </div>
        {index === 0 && (<div ref={similarref} style={{ marginTop:'300px' , transition:'1s ease' ,  display: 'flex', padding: '24px', flexDirection: 'column', alignItems: 'flex-start', gap: '16px', height: 'fit-content', width: '100%', backgroundColor: '#202324', borderRadius: '16px'}}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            Similar Properties
            <div style={{ borderRadius: '32px', border: '1px solid #2B2E31', backgroundColor: '#1E2121', padding: '12px 18px 12px 18px', whiteSpace: 'nowrap' }}>View more</div>
          </div>
          <Box sx={{width:'100%'}}>
          <Scrollbar sx={{width:'100%'}}>
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
