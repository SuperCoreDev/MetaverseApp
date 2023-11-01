/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// next
import Head from 'next/head';
import Image from 'next/image';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useRef, ReactNode, useState } from 'react';
import { styled } from '@mui/material/styles';
import MarketPlaceGridItem from 'src/components/metaverse/marketplace/MarketplaceGridItem';
import { Icon } from '@iconify/react';
import { Container, Typography, Stack, Button } from '@mui/material';
// layouts
import DashboardLayout from '../../layouts/dashboard';


// components

const CustomText = styled('div')({
    color: 'white',
    fontSize: '12px'
})



MetaverseMarketPlace.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

// ----------------------------------------------------------------------

export default function MetaverseMarketPlace() {

    return (
        <>
            <Head>
                <title> Metaverse Marketplace </title>
            </Head>
            <Stack sx={{
                width: '100%', boxShadow: '0px 6px 12px 0px #00000033',
                background: '#202324', padding: '32px'
            }}>
                <Stack direction="column" gap={4}>

                    <Stack direction='row' justifyContent='space-between' alignItems='center'>
                        <Stack direction='row' alignItems='center'>
                            <Icon icon="noto:fire" color="gray" width="24" height="24" />
                            <Typography color='white' fontSize={32} fontWeight={600}>Metaverse Marketplace</Typography>
                        </Stack>
                        <div style={{
                            display: 'flex', flexDirection: 'column', gap: '32px', borderRadius: '18px',
                            border: '1px solid #2B2E31', backgroundColor: '#1E2121', padding: '12px 24px'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', padding: '10px' }}>
                                <Icon icon="ep:refresh" color="#3dfff3" />
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <CustomText>1m</CustomText>
                                    <CustomText>5m</CustomText>
                                    <CustomText>15m</CustomText>
                                    <CustomText>30m</CustomText>
                                    <CustomText>1h</CustomText>
                                    <CustomText>12h</CustomText>
                                    <CustomText>1d</CustomText>
                                </div>
                            </div>
                        </div>
                    </Stack>
                    <Stack direction='row' color='white' justifyContent='space-evenly' flexWrap='wrap' gap='16px'>
                        <Stack direction='row' sx={{ padding: '24px', background: '#2B2E31', borderRadius: '16px', border: '1px #4A4D52 solid' }}>
                            <Stack direction='column'>
                                <Stack direction='row'>
                                    <Typography>Market Cap</Typography>
                                    <Icon icon="carbon:information" color="gray" width="16" height="16" />
                                </Stack>
                                <Typography>$346,789,356,231.00</Typography>
                                <Typography color='green'>+34%</Typography>
                            </Stack>
                            <Image src='/assets/images/metaverse/graph1.png' alt='graph1' width={180} height={80} />
                        </Stack>
                        <Stack direction='row' sx={{ padding: '24px', background: '#2B2E31', borderRadius: '16px', border: '1px #4A4D52 solid' }}>
                            <Stack direction='column'>
                                <Stack direction='row'>
                                    <Typography>Sales Volume</Typography>
                                    <Icon icon="carbon:information" color="gray" width="16" height="16" />
                                </Stack>
                                <Typography>$346,789,356,231.00</Typography>
                                <Typography color='green'>+34%</Typography>
                            </Stack>
                            <Image src='/assets/images/metaverse/graph1.png' alt='graph1' width={180} height={80} />
                        </Stack>
                        <Stack direction='row' sx={{ padding: '24px', background: '#2B2E31', borderRadius: '16px', border: '1px #4A4D52 solid' }}>
                            <Stack direction='column'>
                                <Stack direction='row'>
                                    <Typography>Total Sales</Typography>
                                    <Icon icon="carbon:information" color="gray" width="16" height="16" />
                                </Stack>
                                <Typography>$346,789,356,231.00</Typography>
                                <Typography color='red'>+34%</Typography>
                            </Stack>
                            <Image src='/assets/images/metaverse/graph2.png' alt='graph1' width={180} height={80} />
                        </Stack>
                    </Stack>
                    <MarketPlaceGridItem />
                </Stack>
            </Stack>
        </>)
}
