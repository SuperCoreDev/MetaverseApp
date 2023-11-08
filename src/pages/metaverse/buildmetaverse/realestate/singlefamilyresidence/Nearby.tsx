import Scrollbar from "src/components/scrollbar/Scrollbar";
import { useRef, useEffect } from "react";
import { styled } from '@mui/material/styles';

const buildingItems = [
    {
        "img": "/assets/nfts/MetaverseCards/RealEstate/nearbuilding_harvad.png",
        "name": "Harvard Business School",
        "topic": 'Science & Technology',
        "distance": '0.8mi'
    },

    {
        "img": "/assets/nfts/MetaverseCards/RealEstate/nearbuilding_supermarche.png",
        "name": "Supermarche Store",
        "topic": 'Lorem ipsum dolor',
        "distance": '0.8mi'
    },

    {
        "img": "/assets/nfts/MetaverseCards/RealEstate/nearbuilding_lakeSheebarah.png",
        "name": "Lake Sheebarah",
        "topic": 'Lorem ipsum dolor',
        "distance": '1.2'
    }
];
const ContentWrapper = styled('div')({
    display: 'flex',
    alignItems: 'flex-start',
    gap: '43px',
    alignSelf: 'stretch',
    '@media (max-width: 900px)': {
        'flexDirection':'column',
        
    },
})
export default function Nearby() {
    const mainRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (mainRef.current) {
            const currentRef = mainRef.current;
            requestAnimationFrame(() => {
                currentRef.style.opacity = '1';
            });
        }
        //opacity:0 , transition:'opacity 1s ease'
    }, [])
    return (
        <div ref={mainRef} style={{ opacity: 0, transition: 'opacity 1s ease', display: 'flex', flexDirection: 'column', gap: '48px', overflow: 'hidden', width: '100%' }}>

            <ContentWrapper>
                <img src={buildingItems[0].img} style={{width:'303px' , height:'179px'}}/>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ fontSize: '32px', fontWeight: '600' }}>{buildingItems[0].name}</div>
                    <div>{buildingItems[0].topic}</div>
                    <div>Distance: {buildingItems[0].distance}</div>
                </div>
            </ContentWrapper>

            <div style={{ width: '100%', height: '1px', backgroundColor: '#4A4D52' }}></div>

            <ContentWrapper>
                <img src={buildingItems[1].img} style={{width:'303px' , height:'179px'}}/>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ fontSize: '32px', fontWeight: '600' }}>{buildingItems[1].name}</div>
                    <div>{buildingItems[1].topic}</div>
                    <div>Distance: {buildingItems[1].distance}</div>
                </div>
            </ContentWrapper>

            <div style={{ width: '100%', height: '1px', backgroundColor: '#4A4D52' }}></div>

            <ContentWrapper>
                <img src={buildingItems[2].img} style={{width:'303px' , height:'179px'}}/>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ fontSize: '32px', fontWeight: '600' }}>{buildingItems[2].name}</div>
                    <div>{buildingItems[2].topic}</div>
                    <div>Distance: {buildingItems[2].distance}</div>
                </div>
            </ContentWrapper>

        </div>
    )
}
