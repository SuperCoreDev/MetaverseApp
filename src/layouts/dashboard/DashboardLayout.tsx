import { useEffect, useState } from 'react';
// @mui
import { Box } from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
// auth
import AuthGuard from '../../auth/AuthGuard';
// components
import { useSettingsContext } from '../../components/settings';
//
import Main from './Main';
import Header from './header';
import NavMini from './nav/NavMini';
import NavVertical from './nav/NavVertical';
import NavHorizontal from './nav/NavHorizontal';
import { useRouter } from 'next/router';

// ----------------------------------------------------------------------

type Props = {
  children?: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  const {pathname} = useRouter();
  const [isDashboard , setDashboardIs] = useState(true);
  useEffect(() => {
    if ( pathname.indexOf('dashboard') !== -1) setDashboardIs(true);
    else setDashboardIs(false);
  } , [pathname])

  const { themeLayout } = useSettingsContext();

  const isDesktop = useResponsive('up', 'lg');

  const [open, setOpen] = useState(false);

  const isNavHorizontal = themeLayout === 'horizontal';

  const isNavMini = themeLayout === 'mini';

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderNavVertical = <NavVertical openNav={open} onCloseNav={handleClose} />;

  const renderContent = () => {
    if (isNavHorizontal) {
      return (
        <div style={{backgroundColor:'#202324'}}>
          <Header onOpenNav={handleOpen} />

          {isDesktop ? <NavHorizontal /> : renderNavVertical}

          <Main>{children}</Main>
        </div>
      );
    }

    if (isNavMini) {
      return (
        <div style={{backgroundColor:'#202324'}}>
          <Header onOpenNav={handleOpen} />

          <Box
            sx={{
              display: { lg: 'flex' },
              minHeight: { lg: 1 },
            }}
          >
            {isDesktop ? <NavMini /> : renderNavVertical}

            <Main>{children}</Main>
          </Box>
        </div>
      );
    }

    return (
      <div style={{position:'relative' , backgroundColor:'#202324'}}>
        {!isDashboard && (<><div style={{position:'fixed', top:'-66px' , left:'-163px' , width: '130px', height: '130px', background: 'rgba(104, 203.56, 235, 0.40)', 
        boxShadow: '300px 300px 300px ', borderRadius: 9999, filter: 'blur(300px)'}} />
        <div style={{width: '130px', height: '130px', left: 937, top: 441, position: 'fixed', 
        background: 'rgba(235, 104, 198.32, 0.40)', boxShadow: '300px 300px 300px ', borderRadius: 9999, filter: 'blur(300px)'}} /></>)}

        <Header onOpenNav={handleOpen} />

        <Box
          sx={{
            // display: { lg: 'flex' },
            // minHeight: { lg: 1 },
          }}
        >
          {renderNavVertical}

          <Main>{children}</Main>
        </Box>
    </div>
    );
  };

  return <AuthGuard> {renderContent()} </AuthGuard>;
}
