// next
import Head from 'next/head';
import { Container, TextField, Typography } from '@mui/material';
// layouts
import DashboardLayout from '../../layouts/dashboard';
// components
import { Icon } from '@iconify/react'
import { useSettingsContext } from '../../components/settings';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Switch } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import Grid from '@mui/material/Grid';
// ----------------------------------------------------------------------

PageTwo.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

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

const LeftComp = styled('div')({
  width: '70%',
  backgroundColor: '#1E2121',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px'
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

export default function PageTwo() {
  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Head>
        <title> Page Two | Minimal UI</title>
      </Head>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <TopBar>
          <TopButton>Overview</TopButton>
          <TopButton>Collectibles</TopButton>
          <TopButton>Land</TopButton>
          <TopButton>Marketplace</TopButton>
          <TopButton>News</TopButton>
          <TopButton>About</TopButton>
          <TopButton>Comments</TopButton>
        </TopBar>

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
          </LeftComp>
          <RightComp>bbb</RightComp>
        </div>
      </Container>
    </>
  );
}
