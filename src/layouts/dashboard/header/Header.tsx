import Image from 'next/image';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// @mui
import { useTheme } from '@mui/material/styles';
import { Stack, AppBar, Toolbar, Link, Box, IconButton, Typography } from '@mui/material';
// utils
import { bgBlur } from '../../../utils/cssStyles';
// hooks
import useOffSetTop from '../../../hooks/useOffSetTop';
import useResponsive from '../../../hooks/useResponsive';

// config
import { HEADER, NAV } from '../../../config-global';
// components
import Logo from '../../../components/logo';
import Iconify from '../../../components/iconify';
import { useSettingsContext } from '../../../components/settings';

//
import Searchbar from './Searchbar';
import AccountPopover from './AccountPopover';
import LanguagePopover from './LanguagePopover';
import ContactsPopover from './ContactsPopover';
import NotificationsPopover from './NotificationsPopover';


// ----------------------------------------------------------------------

type Props = {
  onOpenNav?: VoidFunction;
};

export default function Header({ onOpenNav }: Props) {
  const {pathname} = useRouter();
  const theme = useTheme();
  console.log(pathname);
  const currentUrlPath = usePathname();
  const [isMetaverseOpened, setMetaverseOpened] = useState(false);
  useEffect(() => {
    if (pathname.endsWith('/two') || pathname.indexOf('metaverse') !== -1) setMetaverseOpened(true);
    else setMetaverseOpened(false);
  }, [pathname])
  const { themeLayout } = useSettingsContext();

  const isNavHorizontal = themeLayout === 'horizontal';

  const isNavMini = themeLayout === 'mini';

  const isDesktop = useResponsive('up', 'sm');

  const isOffset = useOffSetTop(HEADER.H_DASHBOARD_DESKTOP) && !isNavHorizontal;

  const renderContent = (
    <Stack sx={{ width: '100%' }} flexDirection='row' justifyContent='space-between'>
      {/* {isDesktop && isNavHorizontal && <Logo sx={{ mr: 2.5 }} />} */}
      <Stack direction='row' alignItems='center'>
        {!isDesktop && (
          <IconButton onClick={onOpenNav} sx={{ mr: 1, color: 'text.primary' }}>
            <Iconify icon="ei:navicon" width={30} color='lightgrey' />
          </IconButton>
        )}

        {/* <Searchbar /> */}
        {isDesktop && (
          <Link href='/dashboard/one' rel="noopener" underline="none">
            <Box sx={{display:'flex' , justifyContent:'center' , 
            backgroundColor:`${isMetaverseOpened ? '#111' : 'transparent'}` , 
            border:`${isMetaverseOpened ? '1px solid #1C1C1C' : 'none'}`,
            borderRadius: '8px',
            alignItems:'center'}} width={100} height={50}>
            <Image alt="logo" src="/assets/logo.png" width={44.4} height={40}/>
            </Box>
          </Link>)}
        <Box sx={{ padding: '10px' }} />
        
        {/* {isMetaverseOpened && <Typography fontFamily='Neue Haas Grotesk Display Pro' fontSize={32} fontWeight={600}>Metaverse</Typography>} */}
        {!isMetaverseOpened && <Image alt="logoCaption" src="/assets/logoCaption.png" width={108} height={22} />}

      </Stack>
      {isMetaverseOpened && (<Stack gap="24px" direction='row' alignItems='center' fontFamily='Aeonik' fontSize={14} fontWeight={400}>
        <Link component={NextLink} href='/metaverse/overview' underline="none">Overview</Link>
        <Link component={NextLink} href='/metaverse/marketplace' underline="none">Marketplace</Link>
        <Link component={NextLink} href='/metaverse/buildmetaverse' underline="none">Build Metaverse</Link>
      </Stack>)}
      <Stack
        // flexGrow={1}
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        spacing={{ xs: 0.5, sm: 1.5 }}
      >
        {/* <LanguagePopover /> */}

        <NotificationsPopover />

        {/* <ContactsPopover /> */}

        <AccountPopover />
      </Stack>
    </Stack>
  );

  return (
    <AppBar
      sx={{
        boxShadow: 'none',
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        ...bgBlur({
          color: theme.palette.background.default,
        }),
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(isDesktop && {
          // width: `calc(100% - ${NAV.W_DASHBOARD + 1}px)`,
          width: '100%',
          // height: HEADER.H_DASHBOARD_DESKTOP,
          ...(isOffset && {
            height: HEADER.H_DASHBOARD_DESKTOP_OFFSET,
          }),
          ...(isNavHorizontal && {
            width: 1,
            bgcolor: 'background.default',
            height: HEADER.H_DASHBOARD_DESKTOP_OFFSET,
            borderBottom: `dashed 1px ${theme.palette.divider}`,
          }),
          ...(isNavMini && {
            // width: `calc(100% - ${NAV.W_DASHBOARD_MINI + 1}px)`,
            width: '100%'
          }),
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
          background: '#202324',
          boxShadow: '0px 6px 12px 0px #00000033'
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}
