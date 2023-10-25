import Image from "next/image"

const nftShow = (source : string) => <Image src={source} alt="Nft" width={221} height={242}/>

const userAvatar = (source : string) => <Image src={source} alt="useravatar" width={32} height={32}/>

const getPath = (id : number) => `/assets/nfts/${id}.png`;
const nftItems = [
    {nftID:61 , nftName:'Wasdoke1' , userAvatarBox:userAvatar('/assets/nfts/avatar.png') , nftShowContent:nftShow(getPath(61)) , latestBid : 4.45 , from : 2.00 ,price:2,rate:2 },
    {nftID:62 , nftName:'Wasdoke2', userAvatarBox:userAvatar('/assets/nfts/avatar.png'), nftShowContent:nftShow(getPath(62)), latestBid : 4.45 , from: 2.00 , price:2,rate:2},
    {nftID:61 , nftName:'Wasdoke1' , userAvatarBox:userAvatar('/assets/nfts/avatar.png') , nftShowContent:nftShow(getPath(61)) , latestBid : 4.45 , from : 2.00 ,price:2,rate:2 },
]

export default nftItems;