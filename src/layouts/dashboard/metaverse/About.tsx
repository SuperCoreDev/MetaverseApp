import { Container, Box, TextField, Typography, Switch, Stack, Button, InputBase } from '@mui/material';
import { Icon } from '@iconify/react'
import { styled , alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Grid from '@mui/material/Grid';
import ContractDataGrid from './ContractDataGrid';


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
export default function About() {
    return (
        <div style={{ display: 'flex', gap: '20px' }}>
            <LeftComp>
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
                <ContractDataGrid/>
            </LeftComp>
            <RightComp sx={{
                color: 'white', fontFamily: 'Neue Haas Grotesk Display Pro', padding: '32px 24px 32px 24px',
                borderRadius: '16px', border: '1px solid #2B2E31', backgroundColor: '#202324'
            }}>

            </RightComp>
        </div>)
        ;
}