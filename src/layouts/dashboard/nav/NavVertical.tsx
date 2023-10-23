import { useEffect } from 'react';
// next
import { useRouter } from 'next/router';
// @mui
import { Box, Stack, Drawer } from '@mui/material';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// config
import { NAV , HEADER } from '../../../config-global';
// components
import Logo from '../../../components/logo';
import Scrollbar from '../../../components/scrollbar';
import { NavSectionVertical } from '../../../components/nav-section';
//
import navConfig from './config-navigation';
import NavDocs from './NavDocs';
import NavAccount from './NavAccount';
import NavToggleButton from './NavToggleButton';
// ----------------------------------------------------------------------
const SPACING = 8;
type Props = {
  openNav: boolean;
  onCloseNav: VoidFunction;
};

export default function NavVertical({ openNav, onCloseNav }: Props) {
  const { pathname } = useRouter();

  // const isDesktop = useResponsive('up', 'lg');
  const isDesktop  = true;
  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        pt: `${HEADER.H_MOBILE}px`,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
        '&:hover':{
          width:'272px',
          zIndex:'100'
        }
      }}
    >
      {/* <Stack
        spacing={3}
        sx={{
          pt: 3,
          pb: 2,
          px: 2.5,
          flexShrink: 0,
        }}
      >
        <Logo />

        <NavAccount />
      </Stack> */}

      <NavSectionVertical data={navConfig} />

      <Box sx={{ flexGrow: 1 }} />

      {/* <NavDocs /> */}
    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_DASHBOARD },
        paddingTop : '80px',

        '&:hover':{
          width:'272px',
          zIndex:'100'
        }
      }}
    >
      {/* <NavToggleButton /> */}

      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              zIndex: 0,
              width: NAV.W_DASHBOARD,
              bgcolor: 'transparent',
              border : 'none',
              // borderRightStyle: 'dashed',
              '&:hover':{
                width:'272px',
                zIndex:'100'
              }
            },
            
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: {
              width: NAV.W_DASHBOARD,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
