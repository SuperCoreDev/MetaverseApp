import { Box, Container, Stack, Typography } from "@mui/material";
import { Icon } from '@iconify/react';
import { styled } from '@mui/material/styles';

interface NftCardProps {
    avatar : string,
    username : string,
    lastUpdated : string,
    content : string,
    pros : number,
    cons : number,
    reply: number
}

const InfoBox = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '4px',
    fontFamily : 'Neue Haas Grotesk Display Pro',
    color:'white'
})
export default function CommentItem({avatar,username,lastUpdated, content, pros, cons, reply}:NftCardProps){
    return (
        <div style={{display: 'flex', alignItems: 'flex-start', gap: '12px', alignSelf: 'stretch', color: 'white'}}>
            <img src={avatar} />
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px', flex: '1 0 0'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                    <div style={{fontSize: '20px', fontWeight: '600'}}>{username}</div>
                    <div style={{fontSize: '14px', fontWeight: '500'}}>{lastUpdated}</div>
                </div>
                <div style={{fontSize: '14px', fontWeight: '500', whiteSpace: 'pre-line'}}>{content}</div>
                <div style={{display: 'flex', gap: '32px', fontSize: '14px', fontWeight: '500'}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
                        <Icon icon="iconamoon:like-light" color="white" />
                        <div>{pros}K</div>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
                        <Icon icon="iconamoon:dislike-light" color="white" />
                        <div>{cons}K</div>
                    </div>
                    <div>Reply</div>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '8px', color: '#08A0D8'}}>
                    <Icon icon="majesticons:chats-2-line" />
                    <div style={{fontSize: '14px', fontWeight: '500'}}>{`View replies (${reply})`}</div>
                </div>
            </div>
            <div>
                <Icon icon="charm:menu-kebab" color="#7C7F86" />
            </div>
        </div>
    )
}