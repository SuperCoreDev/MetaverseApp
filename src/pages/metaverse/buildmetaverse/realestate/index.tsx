/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// next
import Head from 'next/head';
import Image from 'next/image';
import NextLink from 'next/link'
// eslint-disable-next-line import/no-extraneous-dependencies
import { useRef, ReactNode, useState, useEffect , useCallback } from 'react';
import { styled, ThemeProvider } from '@mui/material/styles';
import SearchIcon from "@mui/icons-material/Search";
import NextBreadcrumbs from 'src/components/NextBreadCrumbs';
import { Icon } from '@iconify/react';
import { Container, Tabs,Tab,Typography, Link, Stack, Button, Box, Select, MenuItem, Grid, TextField, InputAdornment,createTheme } from '@mui/material';

// layouts
import DashboardLayout from '../../../../layouts/dashboard';
import Scrollbar from 'src/components/scrollbar/Scrollbar';
import useResponsive from 'src/hooks/useResponsive';
import { useTheme } from '@emotion/react';




// components
type StyledButtonProps = {
    bg : 'string',
    color : 'string'
}
const StyledButton = styled(Button , {
    shouldForwardProp:(prop) => prop !== 'bg' && prop !== 'color'})<StyledButtonProps>(({bg , color}) => ({
   
            background: bg,
            color,
            borderRadius: '50px',
            padding:'8px 12px',
            textAlign: 'center',
            border: 'solid 1px gray',
            fontSize:'18px',
            '@media (max-width:700px)' :{
                fontSize:'13px'
            },
            '&:hover':{
                background:'#23b3e5',
                border:'none'
            },
   
}))

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
const Wrapper = styled(Stack)({
    flexDirection: 'column',
    borderRadius: '16px',
    border: '1px solid #4A4D52',
    background: 'rgba(25, 25, 25, 0.80)',
    padding: '24px 32px',
    gap: '29px'
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
        sx={{ borderRadius: '16px', border: '1px solid #4A4D52', background: '#202324'}}>
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


RealEstate.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

export default function RealEstate() {
    const isLargeDesktop = useResponsive('up',1100)
    const isDesktop = useResponsive('down' , 970)
    const isSmall = useResponsive('down' ,'md')
    const ref = useRef<HTMLDivElement>(null);
    const getDefaultTextGenerator = useCallback((subpath: string) => (
        {
            "buildmetaverse": "Build Metaverse",
            'realestate': 'Real Estate'
        }[subpath]
    ), [])
    const getTextGenerator = useCallback((param: string, query: string) => (
        {
            "buildmetaverse": "Build Metaverse",
            'realestate': 'Real Estate'
        }[param]
    ), []);
    const mainRef = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        handlerButtonClick(0);
        if(mainRef.current)
        {
        mainRef.current.style.marginTop = '0'
        mainRef.current.style.transition = '1s ease'
        }
    },[])
    const handlerButtonClick = (id:number)  => {
        if(ref.current){
           const styledButtonElements = Array.from(ref.current.childNodes).filter((node) : node is HTMLDivElement => node instanceof HTMLDivElement)
           styledButtonElements.forEach((node)=>{
            const children : HTMLElement = node?.firstChild;
            children.style.color = 'white',
            children.style.backgroundColor = 'transparent'
           })
           const indexElement : HTMLElement = styledButtonElements[id]?.firstChild;
           
           indexElement.style.color= 'black';
           indexElement.style.backgroundColor='#D96BFF'
        }
    }
    const theme = useTheme();
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    function a11yProps(index: number) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
    
    }
    return (
        <ThemeProvider theme={theme}>
        <Stack ref={mainRef} marginTop='100%' fontFamily='Neue Haas Grotesk Display Pro' direction='column' sx={{}} gap='24px' padding='0 24px 24px 24px'>
            <NextBreadcrumbs
                breadcrumbCase
                getDefaultTextGenerator={getDefaultTextGenerator}
                getTextGenerator={getTextGenerator} />
            <Grid container ref={ref} justifyContent='space-between' gap={2}>
                <Grid item>
                    <StyledButton color='white' onClick={()=>handlerButtonClick(0)}>Real Estate</StyledButton>
                </Grid>
                <Grid item>
                    <StyledButton color='white' onClick={()=>handlerButtonClick(1)}>Ecommerce</StyledButton>
                </Grid>
                <Grid item>
                    <StyledButton color='white' onClick={()=>handlerButtonClick(2)}>Entertainment</StyledButton>
                </Grid>
                <Grid item>
                    <StyledButton color='white' onClick={()=>handlerButtonClick(3)}>AutoMobile</StyledButton>
                </Grid>
                <Grid item>
                    <StyledButton color='white' onClick={()=>handlerButtonClick(4)}>Sport & Nutrition</StyledButton>
                </Grid>
                <Grid item>
                    <StyledButton color='white' onClick={()=>handlerButtonClick(5)}>Education</StyledButton>
                </Grid>
                <Grid item>
                    <StyledButton color='white' onClick={()=>handlerButtonClick(6)}>Gaming</StyledButton>
                </Grid>
                <Grid item>
                    <StyledButton color='white' onClick={()=>handlerButtonClick(7)}>
                        More
                        <Icon icon="formkit:down" color="gray" width="24" height="24" />
                    </StyledButton>
                </Grid>
            </Grid>
            <Wrapper>
                <Stack sx={{flexDirection: isDesktop ?'column' : 'row'}} gap="20px" justifyContent='space-between'>
                    <Typography color='white' fontSize={32} fontWeight={700}>Real Estate</Typography>
                    <Stack sx={{flexDirection : isSmall ? 'column' : 'row'}} gap='24px'>
                        <TextField
                            id="search"
                            type="search"
                            // label="Search"
                            // value={searchTerm}
                            // onChange={handleChange}
                            placeholder='Search...'
                            // eslint-disable-next-line no-nested-ternary
                            sx={{ width: isSmall ? '100%' : isDesktop ? '50%' : 228 , borderRadius: '12px', background: '#1E2121', }}
                            InputProps={{
                                sx: { color: 'white' },
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Select
                            sx={{
                                color: 'white', width :  isSmall ? '100%' : isDesktop ? '50%' : 208, borderRadius: '12px', background: '#1E2121'
                            }}
                        >
                            {/* <MenuItem value={1}>Red</MenuItem> */}
                        </Select>
                    </Stack>
                </Stack>
                <Stack direction={isDesktop ? 'column' : 'row'} gap="32px">
                    {isDesktop ? (<Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs textColor="primary" indicatorColor="secondary" 
                            variant="scrollable" scrollButtons allowScrollButtonsMobile
                            value={value} onChange={handleChange} aria-label="tab"
                            sx={{'& .MuiTabs-scrollButtons' : {color:'white'}}}>
                                <Tab label="All" {...a11yProps(0)} />
                                <Tab label="Residental" {...a11yProps(1)} />
                                <Tab label="Commercial" {...a11yProps(2)} />
                                <Tab label="NewCondo" {...a11yProps(3)} />
                                <Tab label="Land" {...a11yProps(4)} />
                            </Tabs>
                        </Box>
                    </Box>):(<Box>
                        <Stack width={268} color='white' borderRadius='16px' sx={{cursor:'pointer', background: '#202324' }} direction={isDesktop?'row':'column'} padding='4px 8px'>
                            <Box padding='12px' textAlign='center' sx={{ borderBottom : '1px solid #3A3D41', color: 'red' }}>All</Box>
                            <Box padding='12px' textAlign='center' sx={{ borderBottom : '1px solid #3A3D41' }}>Residental</Box>
                            <Box padding='12px' textAlign='center' sx={{ borderBottom : '1px solid #3A3D41' }}>Commercial</Box>
                            <Box padding='12px' textAlign='center' sx={{ borderBottom : '1px solid #3A3D41' }}>NewCondo</Box>
                            <Box padding='12px' textAlign='center' sx={{ borderBottom : 'none' }}>Land</Box>
                        </Stack>
                    </Box>)}
                    <Stack direction='column' sx={{ width: '100%' }} gap="26px" >
                        <Stack direction={isLargeDesktop ? 'row' : 'column'} borderRadius='16px' width='100%'>
                            <Box position='relative' width={isDesktop ? '100%' : 'inherit'} >
                                <img src='/assets/images/metaverse/realestate/SFR1.png' alt="SFR" style={{ width: '100%', height: '100%' }} />
                                <Box position='absolute' top={15} left={19}>
                                    <Stack direction='row' justifyContent='center' alignItems='center' padding='8px' height={48} gap='20px' borderRadius='4px' sx={{ background: 'rgba(12, 13, 14, 0.20)' }}>
                                        <IconsButton><Icon icon="tabler:capture" color="white" width='100%' height='100%' /></IconsButton>
                                        <IconsButton><Icon icon="material-symbols-light:share-outline" color="white" width='100%' height='100%' /></IconsButton>
                                        <IconsButton><Icon icon="material-symbols-light:bookmark-outline" color="white" width='100%' height='100%' /></IconsButton>
                                        <IconsButton><Icon icon="uiw:like-o" color="white" width='100%' height='100%' /></IconsButton>
                                    </Stack>
                                </Box>
                            </Box>
                            <Stack direction='column' sx={{ width: '100%'}}>
                                <Stack direction='column' gap="2px"
                                    sx={{
                                        padding: '24px 20px 10px 20px',
                                        borderTopRightRadius: isLargeDesktop ? '16px' : 'none', background: '#C40941',
                                    }}>
                                    <Typography color='white' fontSize={20} fontWeight={700}>Single Family Residential</Typography>
                                    <Box sx={{ width: '100%', height: '1px', background: '#D03A67' }} />
                                    <Stack direction='column'>
                                        <ListText color="#EDB3C4" content="Built in 1989" />
                                        <ListText color="#EDB3C4" content="Electric, heat pump" />
                                        <ListText color="#EDB3C4" content="Central air" />
                                        <ListText color="#EDB3C4" content="2 garage spaces" />
                                        <ListText color="#EDB3C4" content="9,466sqft" />
                                        <ListText color="#EDB3C4" content="2% buyers agency fee" />
                                    </Stack>
                                    <Box sx={{ width: '100%', height: '1px', background: '#D03A67' }} />
                                    <Typography fontSize={32} fontWeight={700} color='white'>$197</Typography>
                                    <Typography color='#edb3c4'>price/sqft</Typography>
                                </Stack>
                                <Stack justifyContent='center' alignItems='center'
                                    sx={{ flexGrow: '1', background: 'black', borderBottomRightRadius: '16px', padding: '16px 0',
                                    borderBottomLeftRadius: isLargeDesktop ? 'none' : '16px' , WebkitBorderBottomRightRadius: isLargeDesktop? 'none' : '16px' }}>
                                    <Typography color='white'>Take A Tour</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                            <Grid container gap='32px' justifyContent='space-around' >
                                <Grid item>
                                    <Link underline='none' component={NextLink} href='/metaverse/buildmetaverse/realestate/singlefamilyresidence'>
                                        <CardWrapper src="/assets/images/metaverse/realestate/SFR2.png" />
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <CardWrapper src="/assets/images/metaverse/realestate/SFR3.png" />
                                </Grid>
                                <Grid item>
                                    <CardWrapper src="/assets/images/metaverse/realestate/SFR3.png" />
                                </Grid>
                                <Grid item>
                                    <CardWrapper src="/assets/images/metaverse/realestate/SFR2.png" />
                                </Grid>
                            </Grid>
                    </Stack>
                </Stack>
            </Wrapper>
        </Stack>
        </ThemeProvider>
    )
}