import { useState } from 'react';
// @mui
import { List, Stack, Box } from '@mui/material';
// locales
import { useLocales } from '../../../locales';
//
import { NavSectionProps } from '../types';
import { StyledSubheader } from './styles';
import NavList from './NavList';


// ----------------------------------------------------------------------

export default function NavSectionVertical({ data, sx, ...other }: NavSectionProps) {
  const { translate } = useLocales();
  
  return (
    <Stack sx={{...sx , 
      px:2, display:'flex', flexDirection:'column', gap:'15px'}} 
      {...other}>
        
      {data.map((group) => {
        const key = group.subheader || group.items[0].title;

        return (
            <List key={key} sx={{px: 3 , py:2 ,border:"1px solid #2B2E31" , borderRadius:'12px', 
            backgroundColor:'#202324', display:'flex', flexDirection:'column', gap:'2px'}}>
              {/* {group.subheader && (
                <StyledSubheader disableSticky>{`${translate(group.subheader)}`}</StyledSubheader>
              )} */}

              {group.items.map((list) => (
                <NavList
                  key={list.title + list.path}
                  data={list}
                  depth={1}
                  hasChild={!!list.children}
                />
              ))}
            </List>
        );
      })}
    </Stack>
  );
}
