import { Container, Box, TextField, Typography, Switch, Stack, Button } from '@mui/material';
import { Icon } from '@iconify/react'
import { styled } from '@mui/material/styles';

import FormControlLabel from '@mui/material/FormControlLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Grid from '@mui/material/Grid';
import NftCard from './NftCard';
import nftItems from '../market_overview/nftItemsConfig';


const LeftComp = styled('div')({
    width: '70%',
    backgroundColor: '#1E2121',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    borderRadius: '18px',
    padding: '24px',
    border: '1px solid #2B2E31'
})

const RightComp = styled('div')({
    width: '30%',
    display:'flex',
    flexDirection: 'column',
    gap:'32px',
    paddingTop:'32px 24px 32px 24px'
})

const CustomText = styled('div')({
    color: 'white',
    fontSize: '12px'
})

const Panel = styled('div')({
    backgroundColor: '#2b2b2b',
    border: 'solid 1px gray',
    padding: '15px',
    borderRadius: '15px'
})

const fontName = 'Neue Haas Grotesk Display Pro'



const NftItems = [
    {
        'nftImage' : '/assets/nfts/landnfts/1.png',
        'nftName' : 'Southam Lir...',
        'nftNetwork' : ['polygon','ethereum'],
        'manaVal' : 4.45,
        'usdVal' : 1500,
        'island' : true
    },
    {
        'nftImage' : '/assets/nfts/landnfts/2.png',
        'nftName' : 'Southam Lir...',
        'nftNetwork' : ['polygon','ethereum'],
        'manaVal' : 4.45,
        'usdVal' : 1500,
        'island' : true
    },
    {
        'nftImage' : '/assets/nfts/landnfts/3.png',
        'nftName' : 'Southam Lir...',
        'nftNetwork' : ['polygon','ethereum'],
        'manaVal' : 4.45,
        'usdVal' : 1500,
        'island' : true
    },
    {
        'nftImage' : '/assets/nfts/landnfts/4.png',
        'nftName' : 'Southam Lir...',
        'nftNetwork' : ['polygon','ethereum'],
        'manaVal' : 4.45,
        'usdVal' : 1500,
        'island' : true
    },
    {
        'nftImage' : '/assets/nfts/landnfts/5.png',
        'nftName' : 'Southam Lir...',
        'nftNetwork' : ['polygon','ethereum'],
        'manaVal' : 4.45,
        'usdVal' : 1500,
        'island' : true
    },
    {
        'nftImage' : '/assets/nfts/landnfts/6.png',
        'nftName' : 'Southam Lir...',
        'nftNetwork' : ['polygon','ethereum'],
        'manaVal' : 4.45,
        'usdVal' : 1500,
        'island' : true
    },
    {
        'nftImage' : '/assets/nfts/landnfts/7.png',
        'nftName' : 'Southam Lir...',
        'nftNetwork' : ['polygon','ethereum'],
        'manaVal' : 4.45,
        'usdVal' : 1500,
        'island' : true
    },
    {
        'nftImage' : '/assets/nfts/landnfts/8.png',
        'nftName' : 'Southam Lir...',
        'nftNetwork' : ['polygon','ethereum'],
        'manaVal' : 4.45,
        'usdVal' : 1500,
        'island' : true
    },
    {
        'nftImage' : '/assets/nfts/landnfts/9.png',
        'nftName' : 'Southam Lir...',
        'nftNetwork' : ['polygon','ethereum'],
        'manaVal' : 4.45,
        'usdVal' : 1500,
        'island' : true
    },
    {
        'nftImage' : '/assets/nfts/landnfts/10.png',
        'nftName' : 'Southam Lir...',
        'nftNetwork' : ['polygon','ethereum'],
        'manaVal' : 4.45,
        'usdVal' : 1500,
        'island' : true
    },
    {
        'nftImage' : '/assets/nfts/landnfts/11.png',
        'nftName' : 'Southam Lir...',
        'nftNetwork' : ['polygon','ethereum'],
        'manaVal' : 4.45,
        'usdVal' : 1500,
        'island' : true
    },
    {
        'nftImage' : '/assets/nfts/landnfts/12.png',
        'nftName' : 'Southam Lir...',
        'nftNetwork' : ['polygon','ethereum'],
        'manaVal' : 4.45,
        'usdVal' : 1500,
        'island' : true
    }
]
export default function Land() {
    return (
        <div style={{ display: 'flex', gap: '20px' }}>
            <LeftComp>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <FormControlLabel control={<Switch defaultChecked />} label="Live data" style={{ color: 'white' }} />
                    <TextField
                        variant='standard'
                        InputProps={{
                            disableUnderline: true,
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <Icon icon="ic:round-search" fontSize={25} />
                                </InputAdornment>
                            ),
                            style: { color: 'white' }
                        }}
                        placeholder='Search Collectibles'
                        style={{ color: 'white', width: '400px', borderRadius: '15px', border: 'solid 1px gray', padding: '5px 10px 5px 10px' }}
                    />
                    <TextField
                        variant='standard'
                        InputProps={{
                            disableUnderline: true,
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <Icon icon="mingcute:down-fill" />
                                </InputAdornment>
                            ),
                            style: { color: 'white' }
                        }}
                        placeholder='Recently Listed'
                        style={{ color: 'white', width: '200px', borderRadius: '15px', border: 'solid 1px gray', padding: '5px 10px 5px 10px' }}
                    />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', padding: '10px', border: 'solid 1px gray', borderRadius: '10px' }}>
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
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <CustomText>7d</CustomText>
                        <CustomText>14d</CustomText>
                        <CustomText>30d</CustomText>
                    </div>
                </div>
                <Grid container spacing={2} style={{ color: 'white' }}>
                    <Grid item xs={4}>
                        <Panel>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ color: 'gray' }}>Volume</div>
                                <Icon icon="mdi:information-outline" color="white" />
                            </div>
                            <div>$2.57M</div>
                        </Panel>
                    </Grid>
                    <Grid item xs={4}>
                        <Panel>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ color: 'gray' }}>Traders</div>
                                <Icon icon="mdi:information-outline" color="white" />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>50</div>
                                <div style={{ color: 'green' }}>+100%</div>
                            </div>
                        </Panel>
                    </Grid>
                    <Grid item xs={4}>
                        <Panel>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ color: 'gray' }}>Floor Price</div>
                                <Icon icon="mdi:information-outline" color="white" />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>$60.99K</div>
                                <div style={{ color: 'red' }}>-56.40%</div>
                            </div>
                        </Panel>
                    </Grid>
                    <Grid item xs={4}>
                        <Panel>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ color: 'gray' }}>Avg.Price</div>
                                <Icon icon="mdi:information-outline" color="white" />
                            </div>
                            <div>$23.57K</div>
                        </Panel>
                    </Grid>
                    <Grid item xs={4}>
                        <Panel>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ color: 'gray' }}>Sales</div>
                                <Icon icon="mdi:information-outline" color="white" />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>61</div>
                                <div style={{ color: 'green' }}>+36.97%</div>
                            </div>
                        </Panel>
                    </Grid>
                    <Grid item xs={4}>
                        <Panel>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ color: 'gray' }}>Market Cap</div>
                                <Icon icon="mdi:information-outline" color="white" />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>50</div>
                                <div style={{ color: 'green' }}>+100%</div>
                            </div>
                        </Panel>
                    </Grid>
                </Grid>
                <Grid container wrap='wrap' justifyContent='space-around' padding='24px' gap='24px' sx={{ backgroundColor: '#2B2E31' }} borderRadius='18px'>
                    {
                        NftItems.map(item => (
                            <Grid item>
                                <NftCard nftImage={item.nftImage} nftName={item.nftName} nftNetwork={item.nftNetwork} 
                                manaVal={item.manaVal} usdVal={item.usdVal} island={item.island}/>
                            </Grid>
                        ))
                    }
                </Grid>
            </LeftComp>
            <RightComp sx={{color:'white' , fontFamily:'Neue Haas Grotesk Display Pro' , padding:'32px 24px 32px 24px',
        borderRadius: '16px',border: '1px solid #2B2E31',backgroundColor: '#1E2121'}}>
               
            </RightComp>
        </div>)
        ;
}