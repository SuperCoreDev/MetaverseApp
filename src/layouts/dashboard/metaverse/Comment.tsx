import { Container, Box, TextField, Typography, Switch, Stack, Button, Autocomplete } from '@mui/material';
import { Icon } from '@iconify/react'
import { styled } from '@mui/material/styles';
import { useRef, useEffect } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import CommentItem from './CommentItem';
import useResponsive from 'src/hooks/useResponsive';
import Scrollbar from 'src/components/scrollbar/Scrollbar';


const LeftComp = styled('div')({
    width: '80%',
    backgroundColor: '#1E2121',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'flex-start',
    borderRadius: '18px',
    padding: '24px',
    border: '1px solid #2B2E31'
})

const RightComp = styled('div')({
    width: '20%',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    paddingTop: '32px 24px 32px 24px'
})

const CustomText = styled('div')({
    color: 'white',
    fontSize: '12px'
})

const Panel = styled('div')({
    backgroundColor: '#2b2b2b',
    border: 'solid 1px gray',
    padding: '15px',
    borderRadius: '15px'
})

const fontName = 'Neue Haas Grotesk Display Pro'

const CommentItems = [
    {
        'avatar': '/assets/nfts/avatar_2.png',
        'username': 'Tunde_Kelani678',
        'lastUpdated': '2 weeks ago (edited)',
        'content': `🎮🌌 Just had the most mind-blowing experience exploring #DecentralandMetaverse! 😱🌈 Stepping into this virtual wonderland felt like a journey to another dimension! 🚀💫\n\n🌳🏰 The landscapes were jaw-dropping, and the creativity of fellow users left me in awe. 🤩🎨 From art installations to incredible events, there's always something exciting happening here! 🎉🤯`,
        'pros': 15,
        'cons': 15,
        'replies': 14
    },
    {
        'avatar': '/assets/nfts/avatar_2.png',
        'username': 'Tunde_Kelani678',
        'lastUpdated': '2 weeks ago (edited)',
        'content': `🎮🌌 Just had the most mind-blowing experience exploring #DecentralandMetaverse! 😱🌈 Stepping into this virtual wonderland felt like a journey to another dimension! 🚀💫\n\n🌳🏰 The landscapes were jaw-dropping, and the creativity of fellow users left me in awe. 🤩🎨 From art installations to incredible events, there's always something exciting happening here! 🎉🤯`,
        'pros': 15,
        'cons': 15,
        'replies': 14
    },
    {
        'avatar': '/assets/nfts/avatar_2.png',
        'username': 'Tunde_Kelani678',
        'lastUpdated': '2 weeks ago (edited)',
        'content': `🎮🌌 Just had the most mind-blowing experience exploring #DecentralandMetaverse! 😱🌈 Stepping into this virtual wonderland felt like a journey to another dimension! 🚀💫\n\n🌳🏰 The landscapes were jaw-dropping, and the creativity of fellow users left me in awe. 🤩🎨 From art installations to incredible events, there's always something exciting happening here! 🎉🤯`,
        'pros': 15,
        'cons': 15,
        'replies': 14
    },
    {
        'avatar': '/assets/nfts/avatar_2.png',
        'username': 'Tunde_Kelani678',
        'lastUpdated': '2 weeks ago (edited)',
        'content': `🎮🌌 Just had the most mind-blowing experience exploring #DecentralandMetaverse! 😱🌈 Stepping into this virtual wonderland felt like a journey to another dimension! 🚀💫\n\n🌳🏰 The landscapes were jaw-dropping, and the creativity of fellow users left me in awe. 🤩🎨 From art installations to incredible events, there's always something exciting happening here! 🎉🤯`,
        'pros': 15,
        'cons': 15,
        'replies': 14
    },
    {
        'avatar': '/assets/nfts/avatar_2.png',
        'username': 'Tunde_Kelani678',
        'lastUpdated': '2 weeks ago (edited)',
        'content': `🎮🌌 Just had the most mind-blowing experience exploring #DecentralandMetaverse! 😱🌈 Stepping into this virtual wonderland felt like a journey to another dimension! 🚀💫\n\n🌳🏰 The landscapes were jaw-dropping, and the creativity of fellow users left me in awe. 🤩🎨 From art installations to incredible events, there's always something exciting happening here! 🎉🤯`,
        'pros': 15,
        'cons': 15,
        'replies': 14
    },
    {
        'avatar': '/assets/nfts/avatar_2.png',
        'username': 'Tunde_Kelani678',
        'lastUpdated': '2 weeks ago (edited)',
        'content': `🎮🌌 Just had the most mind-blowing experience exploring #DecentralandMetaverse! 😱🌈 Stepping into this virtual wonderland felt like a journey to another dimension! 🚀💫\n\n🌳🏰 The landscapes were jaw-dropping, and the creativity of fellow users left me in awe. 🤩🎨 From art installations to incredible events, there's always something exciting happening here! 🎉🤯`,
        'pros': 15,
        'cons': 15,
        'replies': 14
    },
    {
        'avatar': '/assets/nfts/avatar_2.png',
        'username': 'Tunde_Kelani678',
        'lastUpdated': '2 weeks ago (edited)',
        'content': `🎮🌌 Just had the most mind-blowing experience exploring #DecentralandMetaverse! 😱🌈 Stepping into this virtual wonderland felt like a journey to another dimension! 🚀💫\n\n🌳🏰 The landscapes were jaw-dropping, and the creativity of fellow users left me in awe. 🤩🎨 From art installations to incredible events, there's always something exciting happening here! 🎉🤯`,
        'pros': 15,
        'cons': 15,
        'replies': 14
    },
    {
        'avatar': '/assets/nfts/avatar_2.png',
        'username': 'Tunde_Kelani678',
        'lastUpdated': '2 weeks ago (edited)',
        'content': `🎮🌌 Just had the most mind-blowing experience exploring #DecentralandMetaverse! 😱🌈 Stepping into this virtual wonderland felt like a journey to another dimension! 🚀💫\n\n🌳🏰 The landscapes were jaw-dropping, and the creativity of fellow users left me in awe. 🤩🎨 From art installations to incredible events, there's always something exciting happening here! 🎉🤯`,
        'pros': 15,
        'cons': 15,
        'replies': 14
    }
]

export default function Comment() {
    const isMiniDesktop = useResponsive('down' , 900)
    const mainRef= useRef<HTMLDivElement>(null);
    useEffect(()=>{
        if(mainRef.current){
            const currentMainRef = mainRef.current;
            requestAnimationFrame(()=>{
                currentMainRef.style.opacity = '1'
            })
            
        }
    },[])
    return (
        <div ref={mainRef} style={{opacity:'0' , transition:'opacity 1s ease',  display: 'flex', gap: '20px', fontFamily: fontName, fontSize: '20px', fontWeight: '500' }}>
            <Scrollbar>
                <LeftComp sx={{minWidth:'480px' , width:`${isMiniDesktop?'100%':'80%'}`}}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white', width: '100%' }}>
                        <div>3,6760 Comments</div>
                        <div>
                            <TextField
                                variant='standard'
                                InputProps={{
                                    disableUnderline: true,
                                    endAdornment: (
                                        <InputAdornment position='end'>
                                            <Icon icon="material-symbols:filter-list" fontSize={25} />
                                        </InputAdornment>
                                    ),
                                    style: { color: 'white' }
                                }}
                                placeholder='Filter Comments'
                                style={{ color: 'white', borderRadius: '15px', border: 'solid 1px gray', padding: '5px 10px 5px 10px' }}
                            />
                        </div>
                    </div>
                    <div style={{ width: '100%', height: '1px', background: '#4A4D52' }}></div>
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', color: 'white', width: '100%' }}>
                        <img src="/assets/nfts/avatar_1.png"></img>
                        <div>Tunde_K678</div>
                        <div style={{ width: 'inherit' }}>
                            <TextField
                                variant='standard'
                                InputProps={{
                                    disableUnderline: true,
                                    endAdornment: (
                                        <InputAdornment position='end'>
                                            <Icon icon="uil:smile-beam" fontSize={25} />
                                        </InputAdornment>
                                    ),
                                    style: { color: 'white' }
                                }}
                                placeholder='Type something...'
                                style={{ color: '#595959', borderRadius: '12px', border: 'solid 1px #4A4A4A', padding: '6px 12px 6px 12px', width: 'inherit' }}
                            />
                        </div>
                        <div>
                            <TextField
                                variant='standard'
                                InputProps={{
                                    disableUnderline: true,
                                    endAdornment: (
                                        <InputAdornment position='end'>
                                            <Icon icon="ph:paper-plane-right-bold" color="white" />
                                        </InputAdornment>
                                    ),
                                    style: { color: 'white' }
                                }}
                                placeholder='Post'
                                style={{ color: 'white', borderRadius: '32px', border: 'solid 1px #2B2928', padding: '6px 18px 6px 18px', width: '110px' }}
                            />
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '32px', padding: '24px', background: '#202324', borderRadius: '16px' }}>
                        {
                            CommentItems.map(item => (
                                <CommentItem avatar={item.avatar} username={item.username} lastUpdated={item.lastUpdated} content={item.content} pros={item.pros} cons={item.cons} reply={item.replies} />
                            ))
                        }
                    </div>
                </LeftComp>
            </Scrollbar>
            <RightComp sx={{width:`${isMiniDesktop?'0px':'20%'}`}}/>
        </div>)
        ;
}