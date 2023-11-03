/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// next
import Head from 'next/head';
import Image from 'next/image';
import SearchBar from 'material-ui-search-bar';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useRef, ReactNode, useState, useCallback } from 'react';
import { styled } from '@mui/material/styles';
import SearchIcon from "@mui/icons-material/Search";
import NextBreadcrumbs from 'src/components/NextBreadCrumbs';
import { Icon } from '@iconify/react';
import { Container, Typography, Stack, Button, Box, Select, MenuItem, Grid, TextField, InputAdornment } from '@mui/material';

// layouts
import DashboardLayout from '../../../layouts/dashboard';




// components

const MetaverseClassifyButton = styled('div')({
    display: 'flex',
    width: '138px',
    height: '41px',
    color: '#BEBCBE',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '4px',
    flex: '1 0 0',
    borderRadius: '8px',
    border: '1px solid #2B2928',
    background: '#191919',
    fontSize: '14',
    fontWeight: '500'
})

const Wrapper = styled(Stack)({
    flexDirection: 'column',
    borderRadius: '16px',
    border: '1px solid #4A4D52',
    background: 'rgba(25, 25, 25, 0.80)',
    padding: '24px 32px',
    gap: '29px'
})
type ListTextProps = { content: string , color: string}
const ListText = ({ content , color}: ListTextProps) => (
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
const CardWrapper = ({ src }: CardWrapperProps) => (
    <Stack direction='column' padding='14px' gap="17px"
        sx={{ borderRadius: '16px', border: '1px solid #4A4D52', background: '#202324' }}>
        <Box position='relative' width='inherit'>
            <Image src={src} alt="SFR" width={393} height={208} />
            <Box position='absolute' top={15} left={19}>
                <Stack direction='row' padding='8px' gap='20px' borderRadius='4px' sx={{ background: 'rgba(12, 13, 14, 0.20)' }}>
                    <Icon icon="tabler:capture" color="white" width="24" height="24" />
                    <Icon icon="material-symbols-light:share-outline" color="white" width="24" height="24" />
                    <Icon icon="material-symbols-light:bookmark-outline" color="white" width="24" height="24" />
                    <Icon icon="uiw:like-o" color="white" width="24" height="24" />
                </Stack>
            </Box>
        </Box>
        <Stack direction='column' sx={{ width: '100%' }}>
            <Stack direction='column' gap="2px"
                sx={{
                    // padding: '24px 20px 10px 20px',
                }}>
                <Typography color='white' fontSize={20} fontWeight={700}>Single Family Residential</Typography>
                <Box sx={{ width: '100%', height: '1px', background: '#D03A67' }} />
                <Stack direction='column'>
                    <ListText color='#94979E' content="Built in 1989" />
                    <ListText color='#94979E' content="Electric, heat pump" />
                    <ListText color='#94979E' content="Central air" />
                    <ListText color='#94979E' content="2 garage spaces" />
                    <ListText color='#94979E' content="9,466sqft" />
                    <ListText color='#94979E' content="2% buyers agency fee" />
                </Stack>
                <Box sx={{ width: '100%', height: '1px', background: '#D03A67' }} />
                <Typography fontSize={32} fontWeight={700} color='white'>$197</Typography>
                <Typography color='#94979E'>price/sqft</Typography>
            </Stack>
        </Stack>
    </Stack>
)


RealEstate.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

export default function RealEstate() {
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
    return (
        <Stack fontFamily='Neue Haas Grotesk Display Pro' direction='column' sx={{}} gap='24px' padding='0 24px 24px 24px'>
            <NextBreadcrumbs
                getDefaultTextGenerator={getDefaultTextGenerator}
                getTextGenerator={getTextGenerator} />
            <Grid container justifyContent='space-between'>
                <Grid item>
                    <MetaverseClassifyButton>Real Estate</MetaverseClassifyButton>
                </Grid>
                <Grid item>
                    <MetaverseClassifyButton>Ecommerce</MetaverseClassifyButton>
                </Grid>
                <Grid item>
                    <MetaverseClassifyButton>Entertainment</MetaverseClassifyButton>
                </Grid>
                <Grid item>
                    <MetaverseClassifyButton>AutoMobile</MetaverseClassifyButton>
                </Grid>
                <Grid item>
                    <MetaverseClassifyButton>Sport & Nutrition</MetaverseClassifyButton>
                </Grid>
                <Grid item>
                    <MetaverseClassifyButton>Education</MetaverseClassifyButton>
                </Grid>
                <Grid item>
                    <MetaverseClassifyButton>Gaming</MetaverseClassifyButton>
                </Grid>
                <Grid item>
                    <MetaverseClassifyButton>
                        More
                        <Icon icon="formkit:down" color="gray" width="24" height="24" />
                    </MetaverseClassifyButton>
                </Grid>
            </Grid>
            <Wrapper>
                <Stack direction='row' justifyContent='space-between'>
                    <Typography color='white' fontSize={32} fontWeight={700}>Real Estate</Typography>
                    <Stack direction='row' gap='24px'>
                        <TextField
                            id="search"
                            type="search"
                            // label="Search"
                            // value={searchTerm}
                            // onChange={handleChange}
                            sx={{ width: 228, borderRadius: '12px', background: '#1E2121', }}
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
                                color: 'white', width: '208px', borderRadius: '12px', background: '#1E2121'
                            }}
                        >
                            <MenuItem value={1}>Red</MenuItem>
                        </Select>
                    </Stack>
                </Stack>
                <Stack direction='row' gap="32px">
                    <Box>
                        <Stack width={268} color='white' borderRadius='16px' sx={{ background: '#202324' }} direction='column' padding='4px 8px'>
                            <Box padding='12px' textAlign='center' sx={{ color: 'red', border: '1px solid transparent', borderBottomColor: '#3A3D41' }}>All</Box>
                            <Box padding='12px' textAlign='center' sx={{ border: '1px solid transparent', borderBottomColor: '#3A3D41' }}>Residental</Box>
                            <Box padding='12px' textAlign='center' sx={{ border: '1px solid transparent', borderBottomColor: '#3A3D41' }}>Commercial</Box>
                            <Box padding='12px' textAlign='center' sx={{ border: '1px solid transparent', borderBottomColor: '#3A3D41' }}>NewCondo</Box>
                            <Box padding='12px' textAlign='center' sx={{ border: '1px solid transparent' }}>Land</Box>
                        </Stack>
                    </Box>
                    <Stack direction='column' sx={{ width: '100%' }} gap="26px">
                        <Stack direction='row' borderRadius='16px' sx={{ width: '100%' }}>
                            <Box position='relative' width='inherit'>
                                <img src='/assets/images/metaverse/realestate/SFR1.png' alt="SFR" style={{width:'100%' , height:'100%'}} />
                                <Box position='absolute' top={15} left={19}>
                                    <Stack direction='row' padding='8px' gap='20px' borderRadius='4px' sx={{ background: 'rgba(12, 13, 14, 0.20)' }}>
                                        <Icon icon="tabler:capture" color="white" width="24" height="24" />
                                        <Icon icon="material-symbols-light:share-outline" color="white" width="24" height="24" />
                                        <Icon icon="material-symbols-light:bookmark-outline" color="white" width="24" height="24" />
                                        <Icon icon="uiw:like-o" color="white" width="24" height="24" />
                                    </Stack>
                                </Box>
                            </Box>
                            <Stack direction='column' sx={{ width: '100%' }}>
                                <Stack direction='column' gap="2px"
                                    sx={{
                                        padding: '24px 20px 10px 20px',
                                        borderTopRightRadius: '16px', background: '#C40941'
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
                                    sx={{ flexGrow: '1', background: 'black', borderBottomRightRadius: '16px' , padding:'16px 0' }}>
                                    <Typography color='white'>Take A Tour</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                        <Grid container gap='32px' justifyContent='space-around'>
                            <Grid item>
                                <CardWrapper src="/assets/images/metaverse/realestate/SFR2.png" />
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
    )
}