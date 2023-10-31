import { Container, Box, TextField, Typography, Switch, Stack, Button, InputBase } from '@mui/material';
import { Icon } from '@iconify/react'
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Grid from '@mui/material/Grid';
import ContractDataGrid from './ContractDataGrid';
import useResponsive from 'src/hooks/useResponsive';
import Scrollbar from 'src/components/scrollbar/Scrollbar';


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

const fontName = 'Neue Haas Grotesk Display Pro'
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '12px',
  backgroundColor: alpha('#1E2121', 0.15),
  '&:hover': {
    backgroundColor: alpha('#1E2121', 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  boxShadow: '0px 0px 0px 1px rgba(160, 140, 199, 0.16), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)',
  // [theme.breakpoints.up('sm')]: {
  //   marginLeft: theme.spacing(3),
  //   width: 'auto',
  // },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'white',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    //   transition: theme.transitions.create('width'),
    //   [theme.breakpoints.up('md')]: {
    //     width: '20ch',
    //   },
  },
}));

const Pad = styled('div')({
  background: '#2b2b2b',
  borderRadius: '10px',
  padding: '10px 20px 10px 20px',
});

export default function About() {
  const isdesktop = useResponsive('up',1380);
  return (
    <div style={{ display: 'flex', gap: '20px' , flexDirection:`${isdesktop?'row':'column'}`}}>
      <LeftComp sx={{width:`${isdesktop?'70%':'100%'}`}}>
        <Typography color='white' fontFamily='Neue Haas Grotesk Display Pro' fontSize={32} fontWeight={600}>Smart Contracts (5432)</Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search Contracts"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <Scrollbar>
          <ContractDataGrid />
        </Scrollbar>
      </LeftComp>
      <RightComp sx={{
        color: 'white', fontFamily: 'Neue Haas Grotesk Display Pro',
        width:`${isdesktop?'30%':'100%'}`
      }}>
        <Box sx={{display:'flex',flexDirection:'column',gap:'32px', borderRadius: '16px',
        padding:'24px', border: '1px solid #2B2E31', backgroundColor: '#202324' , flexWrap:'wrap'}}>
          <div style={{ fontSize: '25px' }}>Decentraland Details</div>
          <div
            style={{ display: 'flex', width: '100%', gap: '5px', justifyContent: 'space-between' }}
          >
            <Pad style={{ width: '50%' }}>
              <div style={{ color: 'gray' }}>Date Listed</div>
              <div>July 23, 2023</div>
            </Pad>
            <Pad style={{ width: '50%' }}>
              <div style={{ color: 'gray' }}>Last Updated</div>
              <div>August 15, 2023</div>
            </Pad>
          </div>
          <Pad>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'gray' }}>
              Metaverse ID
              <Icon icon="mdi:information-outline" color="gray" />
            </div>
            <div>August 15, 2023</div>
          </Pad>
        </Box>
      </RightComp>
    </div>)
    ;
}