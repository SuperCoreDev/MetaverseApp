import { Container, Box, TextField, Typography, Switch , Stack } from '@mui/material';
import { Icon } from '@iconify/react'
import { styled } from '@mui/material/styles';
import dynamic from "next/dynamic";

import FormControlLabel from '@mui/material/FormControlLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Grid from '@mui/material/Grid';
import ChartComponent from 'src/components/marketChartView/mApexChart';
import { ReactNode } from 'react';
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

  const LeftComp = styled('div')({
    width: '70%',
    backgroundColor: '#1E2121',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    borderRadius:'18px',
    padding:'24px'
  })
  
  const RightComp = styled('div')({
    width: '30%'
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
      series: [61,22,17],
      options: {
        chart: {
          width: 380,
          type: 'donut',
        },
        // labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      }
    };
  
    return <ApexChart options={PieChartOption?.options} series={PieChartOption?.series} type='donut' />;
  };
export default function Collectibles() {
    return(
    <div style={{ display: 'flex', gap: '20px' }}>
        <LeftComp>
            <Typography color='white' fontFamily='Neue Haas Grotesk Display Pro' fontSize={32} fontWeight={600}>Decentraland Stat</Typography>
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
            <Box height='32px'/>
            <Stack direction='column' padding='24px' gap='24px' sx={{backgroundColor:'#2B2E31'}} borderRadius='18px'>
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
                <ChartComponent height='350px'/>
            </Stack>
            <Box height='32px'/>
            <Stack direction='column' padding='24px' gap='24px' sx={{backgroundColor:'#2B2E31'}} borderRadius='18px'>
                <Stack direction='row' justifyContent='space-between'>
                    <Typography color='white' fontFamily={fontName} fontSize={32} fontWeight={600}>Market Activities</Typography>
                    <Icon icon="uil:focus" color="gray" width="24" height="24" />
                </Stack>
                <Stack direction='row' justifyContent='space-between'>
                    <PieChart/>
                    <Stack direction='column' justifyContent='flex-start' sx={{width:'33.3%'}} color='white'>
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
        </LeftComp>
        <RightComp>bbb</RightComp>
    </div>)
    ;
}