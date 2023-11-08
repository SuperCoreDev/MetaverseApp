/* eslint-disable react/no-unstable-nested-components */
import { Typography, Grid, TextField, Stack, InputAdornment } from "@mui/material"
import { Icon } from '@iconify/react'
import Button from '@mui/material/Button';
import dayjs from 'dayjs';
import { useEffect, useRef, useState } from "react";
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';


export default function Booking() {
    const [agentType , setAgentType] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        onSwitchHandler(0);
    },[])
    const onSwitchHandler = (switchCase: number) => {
        if (switchCase === 1) {
          setAgentType(1);
        } else {
          setAgentType(0);
        }
        if(ref.current){
            const children = ref.current?.children;
            Array.from(children).forEach((child) => {
              child.classList.remove('highlight');
              child.removeAttribute('style');
            })
            
            const child = children.item(switchCase) as HTMLElement;
            if (child !== null && child !== undefined) {
              child.classList.add('highlight');
              child.style.filter = 'grayScale(0%)';
              child.style.transition = 'filter 0.3s'
            }
          }
   };
    const ContactagentRender = () => (

        <Grid container>
            <Grid item md={8} sm={12} xs={12}>
                <Grid container spacing='32px'>
                    <Grid item md={6} sm={12}  xs={12}>
                        <TextField
                            sx={{
                                width: '100%'
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Icon icon="fluent-mdl2:contact" color="#94979e" width="16" height="16" />
                                    </InputAdornment>
                                ),
                                sx: {
                                    borderRadius: '16px',
                                    color: 'white'
                                }
                            }}
                            placeholder="First Name"
                        />
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <TextField
                            sx={{
                                width: '100%'
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Icon icon="fluent-mdl2:contact" color="#94979e" width="16" height="16" />
                                    </InputAdornment>
                                ),
                                sx: {
                                    borderRadius: '16px',
                                    color: 'white'
                                }
                            }}
                            placeholder="First Name"
                        />
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <TextField
                            sx={{
                                width: '100%'
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Icon icon="fluent-mdl2:contact" color="#94979e" width="16" height="16" />
                                    </InputAdornment>
                                ),
                                sx: {
                                    borderRadius: '16px',
                                    color: 'white'
                                }
                            }}
                            placeholder="Phone Number"
                        />
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <TextField
                            sx={{
                                width: '100%'
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Icon icon="fluent-mdl2:contact" color="#94979e" width="16" height="16" />
                                    </InputAdornment>
                                ),
                                sx: {
                                    borderRadius: '16px',
                                    color: 'white'
                                }
                            }}
                            placeholder="Email"
                        />
                    </Grid>
                    <Grid item md={12} sm={12} xs={12}>
                        <TextField
                            sx={{
                                width: '100%'
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start" sx={{ paddingTop: '28px' }}>
                                        <Icon icon="fluent-mdl2:contact" color="#94979e" width="16" height="16" />
                                    </InputAdornment>
                                ),
                                sx: {
                                    borderRadius: '16px',
                                    color: 'white',
                                    height: '191px',
                                    alignItems: 'flex-start'
                                }
                            }}
                            placeholder="Your Message Here"
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
                <Stack sx={{flexDirection:{md:'column' , sm:'row'}}} padding='18px 12px' gap="32px" justifyContent='center' alignItems='center'>
                    <Stack direction='column' gap="9px" alignItems='center'>
                        <img src='/assets/nfts/MetaverseCards/RealEstate/Ellipse 29.png' width={120} height={120} alt="avatar" />
                        <Typography fontSize={20} fontWeight={600}>Edward Madarki</Typography>
                        <Typography fontSize={16} fontWeight={500}>info@metaverse.com</Typography>
                    </Stack>
                    <Stack borderRadius='8px' padding='12px 24px' width='165px' justifyContent='center' alignItems='center'
                        sx={{ background: 'linear-gradient(264deg, #F75BB1 -6.74%, #C392DC 43.26%, #008782 103.97%)' }}>
                        <Typography fontSize={20} fontWeight={600} textAlign='center'>Book Appointment</Typography>
                    </Stack>
                </Stack>
            </Grid>
        </Grid>

    )

    const CalendarWrapper = () => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
                defaultValue={dayjs('2023-10-03')}
                views={['year', 'month', 'day']}
                sx={{
                    '& .MuiButtonBase-root': {color:'#686B72' },
                    '& .Mui-selected':{color:'white'}
                }}
            />
        </LocalizationProvider>
    )
    const TaketourAgent = () => (
        <Stack direction='row' gap="24px" sx={{flexDirection : {md:'row' , xs:'column'}}}>
            <CalendarWrapper />
            <Stack direction='column' flexGrow={1} gap="20px" justifyContent='flex-start' >
                <TextField
                    sx={{
                        width: '100%'
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Icon icon="fluent-mdl2:contact" color="#94979e" width="16" height="16" />
                            </InputAdornment>
                        ),
                        sx: {
                            borderRadius: '16px',
                            color: 'white'
                        }
                    }}
                    placeholder="Tour Day"
                />
                <TextField
                    sx={{
                        width: '100%'
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Icon icon="fluent-mdl2:contact" color="#94979e" width="16" height="16" />
                            </InputAdornment>
                        ),
                        sx: {
                            borderRadius: '16px',
                            color: 'white'
                        }
                    }}
                    placeholder="Time"
                />
                <TextField
                    sx={{
                        width: '100%'
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start" sx={{ paddingTop: '28px' }}>
                                <Icon icon="fluent-mdl2:contact" color="#94979e" width="16" height="16" />
                            </InputAdornment>
                        ),
                        sx: {
                            borderRadius: '16px',
                            color: 'white',
                            height: '120px',
                            alignItems: 'flex-start'
                        }
                    }}
                    placeholder="Additional note"
                />
                <Stack direction='row' gap='20px' padding='18px 12px' justifyContent='center' sx={{lg:'row' , xs:'column'}}>
                    <Stack direction='row' gap='9px' >
                        <img src='/assets/nfts/MetaverseCards/RealEstate/Ellipse 29.png' width={48} height={48} alt='avatar1'/>
                        <Stack direction='column'>
                            <Typography fontSize={20} fontWeight={600}>Edward Madarki</Typography>
                            <Typography fontSize={16} fontWeight={500}>info@metaverse.com</Typography>
                        </Stack>
                    </Stack>
                    <Stack padding='12px 24px' borderRadius='8px' sx={{background:'linear-gradient(264deg, #F75BB1 1%, #C392DC 46%, #008782 100%)'}}>
                        <Typography fontSize={20} fontWeight={600}>Submit</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
    const mainRef= useRef<HTMLDivElement>(null);
    useEffect(() => {
        if(mainRef.current)
        {
            const currentRef = mainRef.current;
            requestAnimationFrame(() => {
                currentRef.style.opacity = '1';
            });
        }
        
    },[])
    return (
        <Stack ref={mainRef} sx={{opacity:0 , transition:'opacity 1s ease'}} direction='column' fontFamily='Neue Haas Grotesk Display Pro' gap='48px'>
            <Stack ref={ref} direction='row' gap="32px" >
                <Stack direction='row' gap='4px' padding='12px 24px' width='341px' alignItems='center'
                    sx={{ borderRadius: '12px', background: '#2B2E31' , filter:'grayScale(100%)' }} onClick={() => onSwitchHandler(0)}>
                    <img alt="contactagent" src="/assets/nfts/MetaverseCards/RealEstate/contact.png" width={48} height={48} />
                    <Typography sx={{ cursor: 'pointer' }} fontSize={20} fontWeight={600} color='#686B72'>Contact Agent</Typography>
                </Stack>
                <Stack direction='row' gap='4px' flexGrow={1} padding='12px 24px' alignItems='center'
                    sx={{ borderRadius: '12px', background: '#2B2E31' , filter:'grayScale(100%)'}} onClick={() => onSwitchHandler(1)}>
                    <img alt="contactagent" src="/assets/nfts/MetaverseCards/RealEstate/address.png" width={48} height={48} />
                    <Typography fontSize={20} fontWeight={600} sx={{ cursor: 'pointer' }} color='#686B72'>Take A Tour With Agent</Typography>
                </Stack>
            </Stack>
            {agentType === 0 ?  <ContactagentRender/> : <TaketourAgent />}
        </Stack>
    )
}
