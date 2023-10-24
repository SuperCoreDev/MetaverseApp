// next
import NextLink from 'next/link';
import Image from 'next/image';
// @mui
import { Box, Tooltip, Link, ListItemText } from '@mui/material';
// locales
import { useLocales } from '../../../locales';
// auth
import RoleBasedGuard from '../../../auth/RoleBasedGuard';
//
import Iconify from '../../iconify';
//
import { NavItemProps } from '../types';
import { StyledItem, StyledIcon, StyledDotIcon } from './styles';

// ----------------------------------------------------------------------

export default function NavItem({
  item,
  depth,
  open,
  active,
  isExternalLink,
  ...other
}: NavItemProps) {
  const { translate } = useLocales();

  const { title, path, icon, info, children, disabled, caption, roles } = item;

  const subItem = depth !== 1;
  const renderIcon = () => {
    if (icon && !subItem) {
      return (
        <>  {icon} </>
      );
    } 
    if (title === "Add Wallet") {
      return (
        <Image src="/assets/icons/navbar/ic_addwallet_png.png" alt='AddWallet' width={24} height={24} />
      );
    } 
    if (title === "Ethereum") {
      return (
        <Image src="/assets/icons/navbar/ic_ethereum_png.png" alt='Ethereum' width={24} height={24} />
      );
    }

    return null;
  };

  const renderContent = (
    <StyledItem depth={depth} active={active} disabled={disabled} caption={!!caption} {...other}>
      <Box sx={{paddingLeft: subItem ? '10px' : ''}}>
        <StyledIcon sx={{ marginRight: subItem ? '10px' : '0px' }}>
         {renderIcon()}
        </StyledIcon>
      </Box>
      {/* {subItem && (
        <StyledIcon>
          <StyledDotIcon active={active && subItem} />
        </StyledIcon>
      )} */}

      <ListItemText
        sx={{color:'white',paddingLeft:'5px'}}
        primary={`${translate(title)}`}
        secondary={
          caption && (
            <Tooltip title={`${translate(caption)}`} placement="top-start">
              <span>{`${translate(caption)}`}</span>
            </Tooltip>
          )
        }
        primaryTypographyProps={{
          noWrap: true,
          component: 'span',
          variant: active ? 'subtitle2' : 'body2',
        }}
        secondaryTypographyProps={{
          noWrap: true,
          variant: 'caption',
        }}
      />

      {info && (
        <Box component="span" sx={{ lineHeight: 0}}>
          {info}
        </Box>
      )}

      {!!children && (
        <Iconify
          width={16}
          icon={open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'}
          sx={{ ml: 1, flexShrink: 0 }}
        />
      )}
    </StyledItem>
  );

  const renderItem = () => {
    // ExternalLink
    if (isExternalLink)
      return (
        <Link href={path} target="_blank" rel="noopener" underline="none">
          {renderContent}
        </Link>
      );

    // Has child
    if (children) {
      return renderContent;
    }

    // Default
    return (
      <Link component={NextLink} href={path} underline="none">
        {renderContent}
      </Link>
    );
  };

  return <RoleBasedGuard roles={roles}> {renderItem()} </RoleBasedGuard>;
}
