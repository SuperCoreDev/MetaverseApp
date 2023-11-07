/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// next
import Head from 'next/head';
import NextLink from 'next/link'
// eslint-disable-next-line import/no-extraneous-dependencies
import { useRef, ReactNode, useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import {
  Container,
  Typography,
  Stack,
  Grid,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Link
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
// layouts
import DashboardLayout from '../../layouts/dashboard';
import styled from '@emotion/styled';
import Scrollbar from 'src/components/scrollbar/Scrollbar';
// components


const CategoryButton = styled('div')(({ ...props }) => {
  return {
    background: props.bg,
    color: props.color,
    borderRadius: '10px',
    padding: '8px 14px',
    width: '120px',
    textAlign: 'center',
    fontSize: '12px',
    '@media (max-width:700px)': {
      fontSize: '13px',
    },
  };
});

const Title = styled('div')({
  color: 'white',
  fontSize: '24px',
});

const MetaverseItem = styled('div')(({ ...props }) => {
  return {
    display: 'flex',
    transition: '1s',
    width: `${props.global == true ? '480px' : props.state == false ? '300px' : '800px'}`,
    background: '#1e1e1e',
    padding: '10px',
    flex: 'none',
    borderRadius: '10px',
    justifyContent: 'space-between',
    height: '300px',
    overflow:'hidden',
  };
});

const TrendingButton = styled('div')(({ ...props }) => {
  return {
    display: 'flex',
    gap: '10px',
    // position: `${props.flag == false ? 'absolute' : 'relative'}`,
    position: 'absolute',
    alignItems: 'center',
    transition: '1s',
    transform: `${props.flag == false ? 'translate(20px, 200px)' : 'translate(500px, 30px)'}`,
  };
});

const RightPart = styled('div')(({...props}) => {
  return {
    display: 'flex',
    opacity: props.flag ? '1' : '0',
    transition: '0.3s ease-out',
    flex: 'none',
    flexDirection: 'column',
    color: 'white',
    width: props.flag ? '300px' : '0px',
    padding: props.flag ? '20px' : '0px',
    height: '300px',
    justifyContent: 'space-between',
  }
})

const ViewButton = styled('div')({
  color: '#191919',
  background: '#d96bff',
  textAlign: 'center',
  borderRadius: '10px',
  display: 'flex',
  fontSize: '14px',
  padding: '10px 20px 10px 20px',
  alignItems: 'center',
});

const PopularItem = styled('div')(({ ...props }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    zIndex: `${props.state == true ? '5' : '1'}`,
    position: 'relative',
    // width: '300px',
    background: '#1e1e1e',
    padding: '10px',
    borderRadius: '20px',
    border: 'solid 1px gray',
    justifyContent: 'space-between',
    ':hover': {
      transform: 'scale(1.3, 1.3)',
      transition: '1s',
      position: 'absolute',
      top: '20px'
    },
  };
});

const CustomPagination = styled('div')({
  color: 'white',
});

const PageButton = styled('div')({
  display: 'flex',
  alignItems: 'center',
  border: 'solid 1px gray',
  padding: '5px',
  borderRadius: '5px',
});

const NumberButton = styled('div')(({ ...props }) => {
  return {
    cursor: 'pointer',
    display: 'flex',
    fontSize: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px',
    borderRadius: '5px',
    width: '28px',
    height: '28px',
    background: `${props.active == true ? '#d100bc' : 'transparent'}`,
    border: `${props.active && 'solid 1px gray'}`,
  };
});

const metaverseArray = [0, 1, 2];
const popularArray = [1, 2, 3, 4, 5, 6, 7, 8];

MetaverseOverview.getLayout = (page: React.ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);

const labels = [
  'All Categories',
  'Games',
  'Gambling',
  'Social',
  'Collectibles',
  'Marketplace',
  'Real Estate',
];

// ----------------------------------------------------------------------
export default function MetaverseOverview() {
  const [category, setCategory] = useState(0);
  // const [url1, setUrl1] = useState('/assets/images/metaverse/trending1.png');
  const [current, setCurrent] = useState(-1);
  const [popularIndex, setPopularIndex] = useState(-1);
  const [itemperPage, setItemperPage] = useState('8');
  const [pageIndex, setPageIndex] = useState(1);
  const elementRef = useRef(null);
  const handleChange = (event: SelectChangeEvent) => {
    setItemperPage(event.target.value as string);
  };

  return (
    <>
      <Head>
        <title> Metaverse </title>
      </Head>
      <Stack
        sx={{
          width: '100%',
          height: 'auto',
          boxShadow: '0px 6px 12px 0px #00000033',
          background: '#202324',
          paddingLeft: '20px',
          paddingRight: '20px',
        }}
        gap={4}
      >
        <Grid container spacing={2} style={{ position: 'relative', zIndex: '2', width: 'full' }}>
          {labels.map((x, index) => (
            <Grid item md={3} lg={1.5}>
              <CategoryButton
                bg={`${category === index ? '#d96bff' : '#191919'}`}
                color={`${category === index ? '#191919' : 'white'}`}
              >
                {x}
              </CategoryButton>
            </Grid>
          ))}
          <Grid item sm={1.5}>
            <CategoryButton
              bg={`#191919`}
              color={'white'}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              More
              <Icon icon="mingcute:down-line" color="white" />
            </CategoryButton>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={2}>
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
                padding: '5px 10px 5px 10px',
                background: '#191919',
                width: '100%',
              }}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
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
              placeholder="Search Metaverse"
              style={{
                color: 'white',
                borderRadius: '15px',
                padding: '5px 10px 5px 10px',
                background: '#191919',
                width: '100%',
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <TextField
              variant="standard"
              InputProps={{
                disableUnderline: true,
                endAdornment: (
                  <InputAdornment position="end">
                    <Icon icon="mingcute:down-fill" />
                  </InputAdornment>
                ),
                style: { color: 'white' },
              }}
              placeholder="Newly Listed"
              style={{
                color: 'white',
                borderRadius: '15px',
                padding: '5px 10px 5px 10px',
                background: '#191919',
                width: '100%',
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <TextField
              variant="standard"
              InputProps={{
                disableUnderline: true,
                endAdornment: (
                  <InputAdornment position="end">
                    <Icon icon="mingcute:down-fill" />
                  </InputAdornment>
                ),
                style: { color: 'white' },
              }}
              placeholder="All Chains"
              style={{
                color: 'white',
                borderRadius: '15px',
                padding: '5px 10px 5px 10px',
                background: '#191919',
                width: '100%',
              }}
            />
          </Grid>
        </Grid>
        <Title>Trending Metaverses</Title>
        <Scrollbar style={{ paddingBottom: '10px' }}>
          <div
            style={{
              position: 'relative',
              display: 'flex',
              flex: 'none',
              width: 'auto',
              gap: '10px',
            }}
          >
            {metaverseArray.map((x) => (
              <MetaverseItem
                onMouseEnter={() => setCurrent(x)}
                onMouseLeave={() => setCurrent(-1)}
                state={current == x}
                global={current == -1}
              >
                <img
                  src={
                    current == x
                      ? `/assets/images/metaverse/trending${(x % 2) + 1}-hover.png`
                      : `/assets/images/metaverse/trending${(x % 2) + 1}.png`
                  }
                  style={{ width: '470px', height: 'auto', transition: '1s' }}
                />
                <TrendingButton flag={current == x}>
                  <img
                    src="/assets/images/metaverse/illuvium.png"
                    style={{ width: '64px', height: '64px' }}
                  />
                  <span style={{ color: 'white', fontSize: '32px' }}>Illuvium</span>
                </TrendingButton>
                {(
                  <RightPart flag={current == x}>
                    <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '100px' }}>
                      <div>
                        Decentraland is a decentralized virtual reality platform powered by
                        blockchain technology. Within the Decentraland
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <ViewButton>View Metaverse</ViewButton>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="/assets/images/metaverse/illuvium-1.png" />
                        <img src="/assets/images/metaverse/illuvium-2.png" />
                      </div>
                    </div>
                  </RightPart>
                )}
              </MetaverseItem>
            ))}
          </div>
        </Scrollbar>
        <Title>Most Popular</Title>
        <Grid container sx={{ position: 'relative', gap: '10px', justifyContent: 'center' }}>
          {popularArray.map((x) => (
            <Grid item sx={{ position: 'relative', width: '400px' }}>
              <PopularItem
                onMouseEnter={() => setPopularIndex(x)}
                onMouseLeave={() => setPopularIndex(-1)}
                ref={x == 1 ? elementRef : null}
                state={popularIndex == x}
                index={x - 1}
              >
                <img
                  src={`${
                    popularIndex == x
                      ? '/assets/images/metaverse/popular-hover.png'
                      : `/assets/images/metaverse/popular${x}.png`
                  }`}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <img src={'/assets/images/metaverse/popular-item1.png'} />
                    <div style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                      Decentralland
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img src={'/assets/images/metaverse/popular-item2.png'} />
                    <img src={'/assets/images/metaverse/popular-item3.png'} />
                  </div>
                </div>
                {popularIndex == x && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ color: 'white', fontSize: '10px' }}>
                      Decentraland is a decentralized virtual reality platform powered by blockchain
                      technology. Within the Decentraland platform.
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        paddingBottom: '20px',
                      }}
                    >
                      <Link component={NextLink} underline='none' href='/metaverse/decentraland'><ViewButton>View Metaverse</ViewButton></Link>
                      <div style={{ display: 'flex' }}>
                        <img src="/assets/images/metaverse/popular-item4.png" />
                        <img src="/assets/images/metaverse/popular-item5.png" />
                      </div>
                    </div>
                  </div>
                )}
              </PopularItem>
            </Grid>
          ))}
        </Grid>
        <div
          style={{
            display: 'flex',
            color: 'white',
            justifyContent: 'space-between',
            paddingBottom: '20px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <CustomPagination>
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={itemperPage}
                  onChange={handleChange}
                  sx={{
                    color: 'white',
                    border: 'solid 1px white',
                    borderRadius: '15px',
                    '.MuiSelect-select': { padding: '5px 5px 5px 15px' },
                  }}
                >
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={12}>12</MenuItem>
                  <MenuItem value={16}>16</MenuItem>
                </Select>
              </FormControl>
            </CustomPagination>
            <div>Showing 1 - {itemperPage} of 1534</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', paddingRight: '80px' }}>
            <PageButton>
              <Icon icon="ri:arrow-left-double-fill" color="gray" />
            </PageButton>
            <PageButton>
              <Icon icon="iconamoon:arrow-left-2" color="gray" />
            </PageButton>

            <NumberButton active={pageIndex == 1} onClick={() => setPageIndex(1)}>
              1
            </NumberButton>
            <NumberButton active={pageIndex == 2} onClick={() => setPageIndex(2)}>
              2
            </NumberButton>
            <NumberButton active={pageIndex == 3} onClick={() => setPageIndex(3)}>
              3
            </NumberButton>
            <NumberButton>...</NumberButton>
            <NumberButton active={pageIndex == 1534} onClick={() => setPageIndex(1534)}>
              1534
            </NumberButton>

            <PageButton>
              <Icon icon="iconamoon:arrow-right-2" color="gray" />
            </PageButton>
            <PageButton>
              <Icon icon="ri:arrow-right-double-fill" color="gray" />
            </PageButton>
          </div>
        </div>
      </Stack>
    </>
  );
}
