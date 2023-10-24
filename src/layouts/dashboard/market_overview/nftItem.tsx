import Image from "next/image";
import { Stack, Box, Typography, Grid } from "@mui/material";
import React, { ReactElement, ReactNode } from "react";
import Typhographpy from "src/components/typhography/Typhography";
import { Icon } from '@iconify/react';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent',          // theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'left',
    color: 'white',
}));

interface NftItemProps {
    item: {
        nftID: number;
        nftName: string;
        userAvatarBox: React.ReactNode;
        nftShowContent: React.ReactNode;
        latestBid: number;
        from: number;
        price: number;
        rate: number;
    };
}

export default function NftItem({ item }: NftItemProps) {
    const { nftID, nftName, userAvatarBox, nftShowContent, latestBid, from, price, rate } = item;

    return (
        <Stack direction='column' sx={{
            padding: '14px', width: '100%',
            background: 'linear-gradient(0deg, rgba(198, 224, 255, 0.5), rgba(198, 224, 255, 0.5))',
            borderRadius: '18px',
            backdropFilter: 'blur(10px)'
        }}>
            {nftShowContent}
            <Stack direction='row' gap={1} alignItems='center'>
                <Stack direction='row' gap={1} alignItems='center'>
                    {userAvatarBox}
                    <Stack direction='column'>
                        <Stack direction="row">
                            <Typhographpy fontSize={10} fontWeight={500} lineHeight={12} color='white' >
                                Thenftmakers
                            </Typhographpy>
                            <Icon icon="solar:verified-check-bold" color="#8bf8ff" />
                        </Stack>
                        <Typhographpy fontSize={14} fontWeight={700} lineHeight={12} color='#8bf8ff' >
                            {nftName}#{nftID}
                        </Typhographpy>
                    </Stack>
                </Stack>
                <Box>
                    <Image src='/assets/icons/navbar/ic_ethereum_png.png' alt="ethereum" width={24} height={24} />
                </Box>
            </Stack>
            <Box sx={{ flexGrow: 1, width: '220px', backgroundColor: 'black' }}>
                <Grid container spacing={1} paddingLeft={2}>
                    <Grid item xs={4}>
                        <Item>{latestBid}ETH</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>{from}ETH</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>{price}ETH</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Typhographpy fontSize={10} fontWeight={500} lineHeight={12} color='white' >
                            Latest Bid
                        </Typhographpy>
                    </Grid>
                    <Grid item xs={4}>
                        <Typhographpy fontSize={10} fontWeight={500} lineHeight={12} color='white' >
                            From
                        </Typhographpy>
                    </Grid>
                    <Grid item xs={4}>
                        <Typhographpy fontSize={10} fontWeight={500} lineHeight={12} color='red' >
                            +2.00%
                        </Typhographpy>
                    </Grid>
                </Grid>
            </Box>
        </Stack>
    )
}