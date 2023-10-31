import Image from 'next/image';
import NextLink from 'next/link';
// @mui
import { useTheme } from '@mui/material/styles';
import { Stack, AppBar, Toolbar, Link, Box, IconButton } from '@mui/material';
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
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

// ----------------------------------------------------------------------

type Props = {
  onOpenNav?: VoidFunction;
};

export default function Header({ onOpenNav }: Props) {
  const theme = useTheme();

  const currentUrlPath = usePathname();
  const [isMetaverseOpened, setMetaverseOpened] = useState(false);
  useEffect(() => {
    if (currentUrlPath.endsWith('/two/') || currentUrlPath.indexOf('metaverse')) setMetaverseOpened(true);
    else setMetaverseOpened(false);
  }, [currentUrlPath])
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
            <Image alt="logo" src="/assets/logo.png" width={44.4} height={40} />
          </Link>)}
        <Box sx={{ padding: '10px' }} />
        <Image alt="logoCaption" src="/assets/logoCaption.png" width={108} height={22} />
      </Stack>
      {isMetaverseOpened && (<Stack gap="24px" direction='row' alignItems='center' fontFamily='Aeonik' fontSize={14} fontWeight={400}>
        <Link href='/metaverse/overview'>Overview</Link>
        <Link href='/metaverse/marketplace'>Marketplace</Link>
        <Link href='/metaverse/buildmetaverse'>Build Metaverse</Link>
      </Stack>)}
      <Stack
        // flexGrow={1}
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        spacing={{ xs: 0.5, sm: 1.5 }}
      >
        <LanguagePopover />

        <NotificationsPopover />

        <ContactsPopover />

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
