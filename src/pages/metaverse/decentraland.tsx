// next
import Head from 'next/head';
import Image from 'next/image';
import { Container, Box, TextField, Typography, Switch , Stack } from '@mui/material';

// components
import { Icon } from '@iconify/react'
import { styled } from '@mui/material/styles';
import { useState  , useRef, useEffect , useCallback} from 'react';
import Grid from '@mui/material/Grid';
import Overview from 'src/layouts/dashboard/metaverse/Overview';
import Collectible from 'src/layouts/dashboard/metaverse/Collectible';
import Comment from 'src/layouts/dashboard/metaverse/Comment';
import Land from 'src/layouts/dashboard/metaverse/Land';
import About from 'src/layouts/dashboard/metaverse/About';
import News from 'src/layouts/dashboard/metaverse/News';
import useResponsive from 'src/hooks/useResponsive';
import MarketPlace from 'src/layouts/dashboard/metaverse/Martketplace';
import NextBreadcrumbs from 'src/components/NextBreadCrumbs';
import { useSettingsContext } from '../../components/settings';

// layouts
import DashboardLayout from '../../layouts/dashboard';








// ----------------------------------------------------------------------

MetaverseDecentraland.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

// ----------------------------------------------------------------------

const TopBar = styled('div')({
  display: 'flex',
  gap: '20px',
  paddingBottom: '40px'
})

const TopButton = styled('div')({
  color: 'white',
  padding: '10px 20px 10px 20px',
  border: 'solid 1px gray',
  borderRadius: '50px',
  fontSize: '14px'
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

const SocialBoxControlBtn = styled('div') ({
  position:'fixed',
  top:'300px',
  right:'0px',
  width:'36px',
  height:'36px',
})
const classifyButtonsList = ['Overview','Collectibles','Land','MarketPlace','News','About','Comment'];

export default function MetaverseDecentraland() {

    const getDefaultTextGenerator = useCallback((subpath: string) => (
        {
            "metaverse" : "Metaverse",
            "decentraland" : "Decentraland"
        }[subpath]
    ), [])
    const getTextGenerator = useCallback((param: string, query: string) => (
        {
            "metaverse" : "Metaverse",
            "decentraland" : "Decentraland"
        }[param]
    ), []);

  const { themeStretch } = useSettingsContext();
  const isDesktop = useResponsive("up" , 1420);
  const [currentClassifySelected , setClassifySelect] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isSocialBoxHidden , setSocialBoxHidden] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    if(mainRef.current)
    {
      mainRef.current.style.marginTop = '0'
      mainRef.current.style.transition = '1s ease-out'
    }
  },[])
  useEffect(() => {
    handleClassify(currentClassifySelected)
  } , [])
  const handleClassify = (currentIndex : number) => {
    setClassifySelect(currentIndex);
    if(ref.current){
      const children = ref.current.children;
      Array.from(children).forEach((child) => {
        child.classList.remove('highlight');
        child.removeAttribute('style');
      })
      
      const child = children.item(currentIndex) as HTMLElement;
      if (child !== null && child !== undefined) {
        child.classList.add('highlight');
        child.style.backgroundColor = '#D96BFF';
        child.style.color = 'black';
      }
    }
  }
  const renderByClassify = () => {
      switch(currentClassifySelected) {
        case 0:
          return <Overview/>;
        case 1:
          return <Collectible/>;
        case 6:
          return <Comment/>;
        case 2:
          return <Land/>;
        case 4:
          return <News/>;
        case 5:
          return <About/>; 
        case 3:
          return <MarketPlace/>;
        default:
          return null;
      }
  }
  return (
    <>
      <Head>
        <title> Page Two | Minimal UI</title>
      </Head>
      {/* sx={{ paddingLeft: '100px'}} */}
      <Container ref={mainRef} maxWidth={themeStretch ? false : 'xl'} sx={{marginTop:'100%' , paddingBottom:'36px'}}>
        {/* <Typography color="white">Metaverse / Decentraland</Typography> */}
        <NextBreadcrumbs breadcrumbCase={false} getDefaultTextGenerator={getDefaultTextGenerator} getTextGenerator={getTextGenerator}/>
        <Box sx={{ height: "20px" }} />
        <Box style={{ position: 'relative' }}>
          <img src="/assets/images/metaverse/coverlogo.png" alt="coverlogo" style={{ borderRadius: '18px', width: '100%', height: '365px' }} />
          <Box style={{ position: 'absolute', bottom: '0px', left: '32px' }}> <Image src='/assets/images/metaverse/coverminilogo.png' alt="minilogo" width={155} height={142} /> </Box>
          <Grid container style={{ position: 'absolute', right: '32px', bottom: '24px', width: '256px' }} spacing={2}>
            <Grid item xs={12}>
              <CButton fontSize={14} bgColor='#F75BB1' color='black'>Jump In</CButton>
            </Grid>
            <Grid item xs={6}>
              <CButton fontSize={14} bgColor='#000' color='white'>
                Share <Icon icon="bi:share" color="white" width="12" height="12" />
              </CButton>
            </Grid>
            <Grid item xs={6}>
              <CButton fontSize={14} bgColor='#000' color='white'>
                Report <Icon icon="mdi:report-finance" color="white" width="12" height="12" />
              </CButton>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ height: "40px" }} />
        <Stack direction='row' gap={5} justifyContent='space-between'>
          <Stack direction='column' gap={3}>
            <Stack direction='row' alignItems='center'>
              <Typography color='white' fontFamily='Termina Test' fontSize={56} fontWeight={900}>Decentraland</Typography>
              <Icon icon="ph:seal-check-fill" color="#8bf8ff" width="32" height="32" />
            </Stack>
            <Stack direction='row' style={{width:'90%'}} sx={{flexDirection: isDesktop ? 'row' : 'column' , gap: isDesktop ? '0' : '16px'}} spacing={4}>
              <Typography color='white' fontFamily='Neue Haas Grotesk Display Pro' fontSize={20} fontWeight={500}>
                Decentraland is a decentralized virtual reality platform powered by blockchain technology. Within the Decentraland platform, users can create, experience, and monetize their content and applications.
              </Typography>
              
              <CButton fontSize={20} bgColor='black' color='#D96BFF' style={{alignSelf:'center' , width:'30%' }}>Buy Metaverse</CButton>
              
            </Stack>
            <TopBar ref={ref} sx={{flexWrap:isDesktop?'':'wrap'}}>
              {
                classifyButtonsList.map((item , key) => (
                  <TopButton onClick={() => handleClassify(key)}>{item}</TopButton>
                ))
              }
            </TopBar>
          </Stack>
        </Stack>
        <Box sx={{ height: "32px" }} />
        {renderByClassify()}
      </Container>


      <SocialBoxControlBtn onClick={() => setSocialBoxHidden(!isSocialBoxHidden)}>
          <Icon icon="emojione-v1:right-arrow" color="#3dfff3" width="36" height="36" />
          <Stack direction='column' visibility={`${isSocialBoxHidden ? 'visible' : 'hidden'}`} sx={{width:'392px' , translate:'-400px -150px'}} gap="29px">
            <Stack direction='row' sx={{paddingLeft:'180px' , paddingRight:'19px'}} gap={4}>
              <Icon icon="mdi:instagram" color="white" width="24" height="24" />
              <Icon icon="mdi:twitter" color="white" width="24" height="24" />
              <Icon icon="ic:baseline-discord" color="white" width="24" height="24" />
            </Stack>
            <Stack direction='column' sx={{width : '392px' , borderRadius: '16px',border: '1px solid #2B2E31',backgroundColor: '#1E2121'}}
             padding='24px'  gap='16px'>
              <Stack direction='row'>
                <Typography fontFamily='Neue Haas Grotesk Display Pro' fontSize={20} fontWeight={500} color='#8D8E8D'>Blockchain</Typography>
                <Grid container rowGap={1} columnGap={2}>
                  <Grid item xs={10}>
                    <Typography fontFamily='Neue Haas Grotesk Display Pro' fontSize={20} fontWeight={600} color='white' textAlign='right'>Ethereum</Typography>
                  </Grid>
                  <Grid item xs={0}>
                    <Icon icon="logos:ethereum" color="white" width="24" height="24" />
                  </Grid>
                  <Grid item xs={10}>
                    <Typography fontFamily='Neue Haas Grotesk Display Pro' fontSize={20} fontWeight={600} color='white' textAlign='right'>Polygon</Typography>
                  </Grid>
                  <Grid item xs={0}>
                    <Icon icon="devicon-plain:polygon" color="#d96bff" width="24" height="24" />
                  </Grid>
                </Grid>
              </Stack> 
              <Box width='100%' height={0} sx={{border:'1px solid #2B2E31'}}/>
              <Stack direction='row' >
                <Typography fontFamily='Neue Haas Grotesk Display Pro' fontSize={20} fontWeight={500} color='#8D8E8D'>Token</Typography>
                <Grid container justifyContent='flex-end'>
                  <Grid item xs={12}>
                    <Typography textAlign='right' fontFamily='Neue Haas Grotesk Display Pro' fontSize={20} fontWeight={500} color='white'>Mana</Typography>
                  </Grid>
                  <Grid item xs={1.5} >
                    <Typography color='red' textAlign='right'>-3.97%</Typography>
                  </Grid>
                  <Grid item xs={1} >
                    <Typography color='white' textAlign='right'>|</Typography>
                  </Grid>
                  <Grid item xs={1.5} >
                    <Typography color='white' textAlign='right'>
                      $2.57
                    </Typography>
                  </Grid>
                </Grid>
              </Stack>
              <Box width='100%' height={0} sx={{border:'1px solid #2B2E31'}}/>
              <Stack direction='row' justifyContent='space-between'>
                <Typography fontFamily='Neue Haas Grotesk Display Pro' fontSize={20} fontWeight={500} color='#8D8E8D'>Rank</Typography>
                <Typography fontFamily='Neue Haas Grotesk Display Pro' fontSize={20} fontWeight={500} color='white'>42</Typography>
              </Stack>
            </Stack>
          </Stack>
      </SocialBoxControlBtn>
    </>
  );
}