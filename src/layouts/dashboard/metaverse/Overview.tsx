import { Container, Box, TextField, Typography, Switch, Stack, Button } from '@mui/material';
import { Icon } from '@iconify/react'
import { styled } from '@mui/material/styles';
import useResponsive from 'src/hooks/useResponsive';
import dynamic from "next/dynamic";
import ChartComponent from 'src/components/marketChartView/mApexChart';
import Scrollbar from 'src/components/scrollbar/Scrollbar';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Grid from '@mui/material/Grid';
import NewsItem from './NewsItem';
import NftCard from './NftCard';


const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

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

const NftSaleItem = () => {

}

const PieChart = () => {
    const PieChartOption = {
        "annotations": {},
        "chart": {
            "animations": {
                "enabled": false
            },
            "background": "transparent",
            "foreColor": "#373D3F",
            "fontFamily": "Roboto",
            "height": 351,
            "id": "vcouu",
            "toolbar": {
                "show": false
            },
            "type": "donut",
            "width": 568
        },
        "plotOptions": {
            "bar": {
                "borderRadius": 10,
                "borderRadiusApplication": "end",
                "borderRadiusWhenStacked": "last",
                "hideZeroBarsWhenGrouped": false,
                "isDumbbell": false,
                "isFunnel": false,
                "isFunnel3d": true,
                "dataLabels": {
                    "total": {
                        "enabled": false,
                        "offsetX": 0,
                        "offsetY": 0,
                        "style": {
                            "color": "#373d3f",
                            "fontSize": "12px",
                            "fontWeight": 600
                        }
                    }
                }
            },
            "bubble": {
                "zScaling": true
            },
            "treemap": {
                "dataLabels": {
                    "format": "scale"
                }
            },
            "radialBar": {
                "hollow": {
                    "background": 'transparent'
                },
                "dataLabels": {
                    "name": {},
                    "value": {},
                    "total": {}
                }
            },
            "pie": {
                "donut": {
                    "size": "20%",
                    "labels": {
                        "name": {},
                        "value": {},
                        "total": {}
                    }
                }
            }
        },
        "colors": [
            "#D205C7",
            "#00EEFF",
            "#F32741",
            "#DC903C",
            "#9ACFB0"
        ],
        "dataLabels": {
            "enabled": false,
            "style": {
                "fontWeight": 700
            }
        },
        "fill": {
            "opacity": 1
        },
        "grid": {
            "padding": {
                "top": 16,
                "right": 0,
                "bottom": 12,
                "left": 10
            }
        },
        "labels": [
            "Chocolate",
            "Vanilla",
            "Strawberry"
        ],
        "legend": {
            "fontSize": 17,
            "itemMargin": {
                "horizontal": 8,
                "vertical": 10
            },
            "show": false
        },
        "series": [
            22,
            61,
            11
        ],
        "stroke": {
            "width": 4,
            "colors": [
                "transparent"
            ],
            "fill": {
                "type": "solid",
                "opacity": 0.85,
                "gradient": {
                    "shade": "dark",
                    "type": "horizontal",
                    "shadeIntensity": 0.5,
                    "inverseColors": true,
                    "opacityFrom": 1,
                    "opacityTo": 1,
                    "stops": [
                        0,
                        50,
                        100
                    ],
                    "colorStops": []
                }
            }
        },
    };

    // Use the 'PieChartOption' object as your ApexCharts options.


    return <ApexChart options={PieChartOption} series={PieChartOption?.series} type='donut' />;
};

const decentralizedNews = [
    {
        'imageSrc': '/assets/images/metaverse/decentralized_news/bbc.png',
        'title': 'BBC host Asia verse on Decentraland th...',
        'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, entum tellus...',
        'readingTime': 2,
        'voteCount': 28,
        'shareCount': 72
    },
    {
        'imageSrc': '/assets/images/metaverse/decentralized_news/expensiveland.png',
        'title': 'Macron Shows Up on Decentraland Firs...',
        'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, entum tellus...',
        'readingTime': 2,
        'voteCount': 28,
        'shareCount': 72
    },
    {
        'imageSrc': '/assets/images/metaverse/decentralized_news/macron.png',
        'title': 'Most Expensive Land in the metaverse...',
        'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, entum tellus...',
        'readingTime': 2,
        'voteCount': 28,
        'shareCount': 72
    },
]


const topNftSalesItems = [
    {
        'nftImage': '/assets/nfts/mallstreet.png',
        'nftName': 'Mall Street',
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
    }
]
export default function Overview() {
    const isDesktop = useResponsive('up', 1430);
    const isMiniDesktop = useResponsive('down', 1290);
    return (
        <div style={{ display: 'flex', gap: '20px', flexDirection: `${isDesktop ? 'row' : 'column'}` }}>
            <LeftComp sx={{ width: `${isDesktop ? '70%' : '100%'}` }}>
                <Typography color='white' fontFamily='Neue Haas Grotesk Display Pro' fontSize={32} fontWeight={600}>Decentraland Stat</Typography>
                {/* <div style={{ display: 'flex', gap: '10px' }}>
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
                </div> */}
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
                <Stack direction='column' padding='24px' gap='24px' sx={{ backgroundColor: '#2B2E31' }} borderRadius='18px'>
                    <Stack direction='row' justifyContent='space-between'>
                        <Typography color='white' fontFamily={fontName} fontSize={32} fontWeight={600}>Market Activities</Typography>
                        <Icon icon="uil:focus" color="gray" width="24" height="24" />
                    </Stack>
                    <Stack direction='row' justifyContent='flex-end' color='white' gap='8px'>
                        <Icon icon="material-symbols:circle" color="#d100bc" width="24" height="24" />
                        Volume
                        <Icon icon="material-symbols:circle" color="#08A0D8" width="24" height="24" />
                        UAW
                    </Stack>
                    <ChartComponent height='350px' />
                </Stack>
                <Stack direction='column' padding='24px' gap='24px' sx={{ backgroundColor: '#2B2E31' }} borderRadius='18px'>
                    <Stack direction='row' justifyContent='space-between'>
                        <Typography color='white' fontFamily={fontName} fontSize={32} fontWeight={600}>Wallet Transaction</Typography>
                        <Icon icon="uil:focus" color="gray" width="24" height="24" />
                    </Stack>
                    <Stack direction='row' justifyContent='space-between'>
                        <PieChart />
                        <Stack direction='column' justifyContent='center' sx={{ width: '33.3%' }} color='white'>
                            <Stack direction='row' gap='5px'>
                                <Icon icon="material-symbols:circle" color="#d100bc" width="14" height="14" />
                                Outflow - 22%
                            </Stack>
                            <Stack direction='row' gap='5px'>
                                <Icon icon="material-symbols:circle" color="#08A0D8" width="14" height="14" />
                                Inflow - 61%
                            </Stack>
                            <Stack direction='row' gap='5px'>
                                <Icon icon="material-symbols:circle" color="#C40941" width="14" height="14" />
                                Everyday users - 17%
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack direction='column' padding='24px' gap='24px' sx={{ backgroundColor: '#2B2E31' }} borderRadius='18px'>
                    <Stack direction='row' justifyContent='space-between'>
                        <Typography color='white' fontFamily={fontName} fontSize={32} fontWeight={600}>Top 3 Sales</Typography>
                        <Button sx={{ width: '135px', height: '40px', alignSelf: 'end' }}>View More News</Button>
                    </Stack>
                    <Scrollbar>
                        <Stack direction='row' gap="20px" minWidth='845px'>
                            {
                                topNftSalesItems.map(item => (
                                    <NftCard nftImage={item.nftImage} nftName={item.nftName} nftNetwork={item.nftNetwork}
                                        manaVal={item.manaVal} usdVal={item.usdVal} island={item.island} />
                                ))
                            }
                        </Stack>
                    </Scrollbar>
                </Stack>
            </LeftComp>
            <RightComp sx={{
                width: `${isDesktop ? '30%' : '100%'}`, color: 'white', fontFamily: 'Neue Haas Grotesk Display Pro', padding: '32px 24px 32px 24px',
                borderRadius: '16px', border: '1px solid #2B2E31', backgroundColor: '#202324'
            }}>
                <Typography fontSize={32} fontWeight={600} textAlign='left'>Decentralized News</Typography>
                <Scrollbar>
                    <Stack direction={`${isDesktop ? 'column' : 'row'}`} gap="32px" minWidth={`${isMiniDesktop ? '1185px' : ''}`}>
                        {decentralizedNews.map((d) => (
                            <NewsItem imageSrc={d.imageSrc} title={d.title} content={d.content} readingTime={d.readingTime}
                                voteCount={d.voteCount} shareCount={d.shareCount} />
                        ))
                        }
                    </Stack>
                </Scrollbar>
                <Button sx={{ width: '135px', height: '40px', alignSelf: 'end' }}>View More News</Button>
            </RightComp>
        </div>)
        ;
}