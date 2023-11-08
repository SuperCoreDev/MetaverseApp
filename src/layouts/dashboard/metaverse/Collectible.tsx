import { Container, Box, TextField, Typography, Switch, Stack, Button, Checkbox } from '@mui/material';
import { Icon } from '@iconify/react'
import { styled } from '@mui/material/styles';
import { useState , useRef, useEffect } from 'react';
import useResponsive from 'src/hooks/useResponsive';
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
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    paddingTop: '32px 24px 32px 24px'
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

const StatusText = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '20px',
});

const Items = ['Clothes', 'Hat', 'Mouth', 'Eyes', 'Fur', 'Background', 'Glasses', 'Earring'];

const Clothes = [
    'Blue Dress',
    'Blue Dress',
    'Blue Dress',
    'Blue Dress',
    'Blue Dress',
    'Blue Suit',
    'Blue Jean',
    'Blue Dress',
    'Blue Dress',
];
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
            }
   
}))

const Submit = styled(Button)({
    background: 'linear-gradient(45deg, #11636f, #F75BB1)',
    textAlign: 'center',
    padding: '1px',
    height: '50px',
    width: '100%',
    borderRadius: '10px',
    inset: '0',
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
    '&:hover':{
        opacity : 0.5,
        transition: 'opacity 1s ease'
    }
});

const SubmitText = styled('div')({
    fontSize:'28px',
    fontWeight:'500',
    background:
        'var(--Gradient, linear-gradient(264deg, #F75BB1 -6.74%, #C392DC 43.26%, #008782 103.97%))',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
});

const Pad = styled('div')({
    background: '#2b2b2b',
    borderRadius: '10px',
    padding: '10px 20px 10px 20px',
});

const NftItems = [
    {
        'nftImage': '/assets/nfts/lightjacket.png',
        'nftName': 'Light Jacket',
        'nftNetwork': ['polygon', 'ethereum'],
        'manaVal': 4.45,
        'usdVal': 1500,
        'island': true
    },
    {
        'nftImage': '/assets/nfts/orangeamor.png',
        'nftName': 'Orange Amor',
        'nftNetwork': ['polygon', 'ethereum'],
        'manaVal': 4.45,
        'usdVal': 1500,
        'island': false
    },
    {
        'nftImage': '/assets/nfts/southamlir.png',
        'nftName': 'Southam Lir...',
        'nftNetwork': ['polygon', 'ethereum'],
        'manaVal': 4.45,
        'usdVal': 1500,
        'island': false
    },
    {
        'nftImage': '/assets/nfts/togohorn.png',
        'nftName': 'Togo Horn...',
        'nftNetwork': ['polygon', 'ethereum'],
        'manaVal': 4.45,
        'usdVal': 1500,
        'island': false
    },
    {
        'nftImage': '/assets/nfts/southamli.png',
        'nftName': 'Southam Li...',
        'nftNetwork': ['polygon', 'ethereum'],
        'manaVal': 4.45,
        'usdVal': 1500,
        'island': false
    },
    {
        'nftImage': '/assets/nfts/hallowemas.png',
        'nftName': 'Hallowe mas...',
        'nftNetwork': ['polygon', 'ethereum'],
        'manaVal': 4.45,
        'usdVal': 1500,
        'island': false
    },
    {
        'nftImage': '/assets/nfts/southamli1.png',
        'nftName': 'Southam Li...',
        'nftNetwork': ['polygon', 'ethereum'],
        'manaVal': 4.45,
        'usdVal': 1500,
        'island': false
    },
    {
        'nftImage': '/assets/nfts/southamli2.png',
        'nftName': 'Southam Li...',
        'nftNetwork': ['polygon', 'ethereum'],
        'manaVal': 4.45,
        'usdVal': 1500,
        'island': false
    },
    {
        'nftImage': '/assets/nfts/shibastock.png',
        'nftName': 'Shiba Stock...',
        'nftNetwork': ['polygon', 'ethereum'],
        'manaVal': 4.45,
        'usdVal': 1500,
        'island': false
    },
    {
        'nftImage': '/assets/nfts/southamli3.png',
        'nftName': 'Southam Li...',
        'nftNetwork': ['polygon', 'ethereum'],
        'manaVal': 4.45,
        'usdVal': 1500,
        'island': false
    },
    {
        'nftImage': '/assets/nfts/southamli4.png',
        'nftName': 'Southam Li...',
        'nftNetwork': ['polygon', 'ethereum'],
        'manaVal': 4.45,
        'usdVal': 1500,
        'island': false
    },
    {
        'nftImage': '/assets/nfts/southamli5.png',
        'nftName': 'Southam Li...',
        'nftNetwork': ['polygon', 'ethereum'],
        'manaVal': 4.45,
        'usdVal': 1500,
        'island': false
    }
]
export default function Collectible() {
    const [visible, setVisible] = useState(true)
    const [status, setStatus] = useState(1);
    const [checkIndex, setCheckIndex] = useState(0);
    const isDesktop = useResponsive('up', 1200);
    const mainRef= useRef<HTMLDivElement>(null);
    useEffect(()=>{
        if(mainRef.current){
            const currentMainRef = mainRef.current;
            requestAnimationFrame(()=>{
                currentMainRef.style.opacity = '1'
            })
            
        }
    },[])
    return (
        <div ref={mainRef} style={{ opacity:'0' , transition:'opacity 1s ease' , display: 'flex', gap: '20px' , flexDirection:`${isDesktop ? 'row' : 'column'}`}}>
            <LeftComp style={{width:`${isDesktop ? '70%' : '100%'}`}}>
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
                <Grid wrap='wrap' container spacing={2} style={{ color: 'white' }}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Panel>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ color: 'gray' }}>Volume</div>
                                <Icon icon="mdi:information-outline" color="white" />
                            </div>
                            <div>$2.57M</div>
                        </Panel>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
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
                    <Grid item xs={12} sm={6} md={4}>
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
                    <Grid item xs={12} sm={6} md={4}>
                        <Panel>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ color: 'gray' }}>Avg.Price</div>
                                <Icon icon="mdi:information-outline" color="white" />
                            </div>
                            <div>$23.57K</div>
                        </Panel>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
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
                    <Grid item xs={12} sm={6} md={4}>
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
                                    manaVal={item.manaVal} usdVal={item.usdVal} island={item.island} />
                            </Grid>
                        ))
                    }
                </Grid>
            </LeftComp>
            <RightComp
                sx={{
                    color: 'white',
                    fontFamily: 'Neue Haas Grotesk Display Pro',
                    padding: '32px 24px 32px 24px',
                    borderRadius: '16px',
                    border: '1px solid #2B2E31',
                    backgroundColor: '#1E2121',
                    width:`${isDesktop ? '30%' : '100%'}`,
                    // flexDirection:`${isDesktop ? 'column' : 'row'}`,
                }}
            >
                <Stack direction='column' gap="32px" sx={{minWidth:'220px'}}>
                    <TextField
                        variant="standard"
                        InputProps={{
                            disableUnderline: true,
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Icon icon="ion:filter" color="gray" />
                                </InputAdornment>
                            ),
                            style: { color: 'white' },
                        }}
                        placeholder="Filter"
                        style={{
                            color: 'white',
                            borderRadius: '15px',
                            border: 'solid 1px gray',
                            padding: '5px 10px 5px 10px',
                        }}
                    />
                    <StatusText>
                        <div>Status</div>
                        <Icon icon="ic:sharp-navigate-next" color="gray" />
                    </StatusText>
                    <div style={{ display: 'flex', flexWrap:'wrap', gap: '10px' }}>
                        <StyledButton
                            bg={status == 1 ? '#D96BFF' : '#212121'}
                            color={status == 1 ? 'black' : 'white'}
                            onClick={() => setStatus(1)}
                        >
                            All Collections
                        </StyledButton>
                        <StyledButton
                            bg={status == 2 ? '#D96BFF' : '#212121'}
                            color={status == 2 ? 'black' : 'white'}
                            onClick={() => setStatus(2)}
                        >
                            Live Auction
                        </StyledButton>
                    </div>
                    <div style={{ display: 'flex',flexWrap:'wrap', gap: '10px' }}>
                        <StyledButton
                            bg={status == 3 ? '#D96BFF' : '#212121'}
                            color={status == 3 ? 'black' : 'white'}
                            onClick={() => setStatus(3)}
                        >
                            NotForSale
                        </StyledButton>
                        <StyledButton
                            bg={status == 4 ? '#D96BFF' : '#212121'}
                            color={status == 4 ? 'black' : 'white'}
                            onClick={() => setStatus(4)}
                        >
                            Buy Now
                        </StyledButton>
                    </div>
                    <StatusText>
                        <div>Price</div>
                        <Icon icon="ic:sharp-navigate-next" color="gray" />
                    </StatusText>
                    <div style={{ display: 'flex', gap: '10px'}}>
                        <TextField
                            variant="standard"
                            InputProps={{
                                disableUnderline: true,
                                style: { color: 'white' },
                            }}
                            placeholder="Min"
                            style={{
                                color: 'white',
                                borderRadius: '15px',
                                border: 'solid 1px gray',
                                padding: '5px 10px 5px 10px',
                            }}
                        />
                        <Icon icon="ooui:arrow-next-ltr" color="gray" fontSize={40} />
                        <TextField
                            variant="standard"
                            InputProps={{
                                disableUnderline: true,
                                style: { color: 'white' },
                            }}
                            placeholder="Max"
                            style={{
                                color: 'white',
                                borderRadius: '15px',
                                border: 'solid 1px gray',
                                padding: '5px 10px 5px 10px',
                            }}
                        />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <SubmitText style={{ position: 'absolute' }}>Submit</SubmitText>
                        <Submit/>
                    </div>
                </Stack>
                <Stack direction='column' gap="32px" sx={{minWidth:'220px'}}>
                    <StatusText onClick={() => setVisible(!visible)} style={{ cursor: 'pointer' }}>
                        <div>Properties</div>
                        <Icon icon="ic:sharp-navigate-next" color="gray" />
                    </StatusText>
                    <div style={{gap:'20px' , display:'flex' ,overflow:'hidden', flexDirection:'column',height: visible ? '100%' : '0' ,transition:'height 0.3s ease'}}>
                        <TextField
                            variant="standard"
                            InputProps={{
                                disableUnderline: true,
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Icon icon="iconamoon:search-light" color="gray" />
                                    </InputAdornment>
                                ),
                                style: { color: 'white' },
                            }}
                            placeholder="Search properties"
                            style={{
                                color: 'white',
                                borderRadius: '15px',
                                border: 'solid 1px gray',
                                padding: '5px 10px 5px 10px',
                            }}
                        />

                        {Items.map((x, ind) => (
                            <div>
                                <StatusText style={{ cursor: 'pointer' }} onClick={() => checkIndex === ind ? setCheckIndex(-1) : setCheckIndex(ind)}>
                                    <div>{x}</div>
                                    <Icon icon="ic:sharp-navigate-next" color="gray" />
                                </StatusText>
                                <div style={{ overflow:'hidden' , height: `${checkIndex === ind ? '100%' : '0'}` , transition:'height 0.3s ease'}}>
                                    {Clothes.map((x) => (
                                        <FormControlLabel
                                            label={
                                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <div>{x}</div>
                                                    <div>45</div>
                                                </div>
                                            }
                                            control={<Checkbox />}
                                            style={{ width: '100%' }}
                                            sx={{
                                                '.MuiFormControlLabel-label': { width: '100%' },
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </Stack>
            </RightComp>
        </div>)
        ;
}