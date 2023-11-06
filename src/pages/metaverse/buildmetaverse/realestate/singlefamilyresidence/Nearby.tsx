import Scrollbar from "src/components/scrollbar/Scrollbar";

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

export default function Nearby() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', overflow: 'hidden', width: '100%' }}>
            <Scrollbar>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '43px', alignSelf: 'stretch' }}>
                    <img src={buildingItems[0].img}></img>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
                        <div style={{ fontSize: '32px', fontWeight: '600' }}>{buildingItems[0].name}</div>
                        <div>{buildingItems[0].topic}</div>
                        <div>Distance: {buildingItems[0].distance}</div>
                    </div>
                </div>
            </Scrollbar>
            <div style={{ width: '100%', height: '1px', backgroundColor: '#4A4D52' }}></div>
            <Scrollbar>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '43px', alignSelf: 'stretch' }}>
                    <img src={buildingItems[1].img}></img>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
                        <div style={{ fontSize: '32px', fontWeight: '600' }}>{buildingItems[1].name}</div>
                        <div>{buildingItems[1].topic}</div>
                        <div>Distance: {buildingItems[1].distance}</div>
                    </div>
                </div>
            </Scrollbar>
            <div style={{ width: '100%', height: '1px', backgroundColor: '#4A4D52' }}></div>
            <Scrollbar>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '43px', alignSelf: 'stretch' }}>
                    <img src={buildingItems[2].img}></img>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
                        <div style={{ fontSize: '32px', fontWeight: '600' }}>{buildingItems[2].name}</div>
                        <div>{buildingItems[2].topic}</div>
                        <div>Distance: {buildingItems[2].distance}</div>
                    </div>
                </div>
            </Scrollbar>
        </div>
    )
}
