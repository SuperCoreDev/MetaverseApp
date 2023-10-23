import { Icon } from '@iconify/react';
import {MenuItem, Select,SelectChangeEvent } from '@mui/material';
import { useState , ReactNode } from "react";
import Image from 'next/image'
import Chart from '../../../components/marketChartView';

import styles from './style.module.scss';


export default function Metaverse() {
    const [chartViewoption, setOptionChart] = useState(10 as ReactNode);
    const handleChange = (event: SelectChangeEvent) => {
        setOptionChart(event.target.value as ReactNode);
    };
    return (
        <div className={styles.MarketOverview}>
            <span className={styles.MarketOverview__header}> Metaverse Market Overview </span>
            <div className={styles.MarketOverview__circumInfo}>
                <div className={styles.circumInfo_BoxContainer}>
                    <div className={styles.circumInfo_BoxContainer__BOX}>
                        <div className={styles.circumInfo_BoxContainer__curcuminfoblock}>
                            <span className={styles.circumInfo_BoxContainer__circumdesc}>UAW</span>
                            <Icon icon="material-symbols:info-outline" color="gray" />
                        </div>
                        <div className={styles.circumInfo_BoxContainer__curcumvalblock}>
                            <span className={styles.MarketOverview__header} style={{ color: "white" }}>439</span>
                            <span className={styles.fontPercent}>+34%</span>
                        </div>
                    </div>
                </div>
                <div className={styles.circumInfo_BoxContainer}>
                    <div className={styles.circumInfo_BoxContainer__BOX}>
                        <div className={styles.circumInfo_BoxContainer__curcuminfoblock}>
                            <span className={styles.circumInfo_BoxContainer__circumdesc}>Volume</span>
                            <Icon icon="material-symbols:info-outline" color="gray" />
                        </div>
                        <div className={styles.circumInfo_BoxContainer__curcumvalblock}>
                            <span className={styles.MarketOverview__header} style={{ color: "white" }}>$20.99k</span>
                            <span className={styles.fontPercent} style={{ color: 'red' }}>-56.40%</span>
                        </div>
                    </div>
                </div>
                <div className={styles.circumInfo_BoxContainer}>
                    <div className={styles.circumInfo_BoxContainer__BOX}>
                        <div className={styles.circumInfo_BoxContainer__curcuminfoblock}>
                            <span className={styles.circumInfo_BoxContainer__circumdesc}>Transaction</span>
                            <Icon icon="material-symbols:info-outline" color="gray" />
                        </div>
                        <div className={styles.circumInfo_BoxContainer__curcumvalblock}>
                            <span className={styles.MarketOverview__header} style={{ color: "white" }}>1.37k</span>
                            <span className={styles.fontPercent}>+36.97%</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.MarketOverview__chartoptionboard}>
                <Select
                    sx={{
                        '.MuiOutlinedInput-notchedOutline': {
                        borderColor: '#2B2E31',
                    },}}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={handleChange}
                    value={chartViewoption}
                    style={{ color:"white" }}
                >
                    <MenuItem value={10}>
                        <div style={{ display: "flex", gap: "16px", flexDirection: "row", alignItems: "center", paddingRight: "60px" }}>
                            Last 7 days
                        </div>
                    </MenuItem>
                    <MenuItem value={20}>
                        <div style={{ display: "flex", gap: "16px", flexDirection: "row", alignItems: "center", paddingRight: "60px" }}>
                            Last 1 month
                        </div>
                    </MenuItem>
                    <MenuItem value={30}>
                        <div style={{ display: "flex", gap: "16px", flexDirection: "row", alignItems: "center", paddingRight: "60px" }}>
                            Last 1 year
                        </div>
                    </MenuItem>
                </Select>
                <div className={styles.chartoptionlist}>
                    <div className={styles.chartoptionlist__chartcolor} style={{ backgroundColor: '#D100BC' }}><></></div>
                    <span className={styles.fontPercent} style={{ color: 'white' }}>Volume</span>
                    <div className={styles.chartoptionlist__chartcolor} style={{ backgroundColor: '#08A0D8' }}><></></div>
                    <span className={styles.fontPercent} style={{ color: 'white' }}>UAW</span>
                    <Icon icon="uil:focus" color="gray" width="24" height="24" />
                </div>
            </div>
            <Chart />
            <div className={styles.MarketOverview__metaversegallery}>
                <div className={styles.galleryHeaderBoard}>
                    <span className={styles.galleryHeaderBoard__headerTitle}>Top 3 Metaverses</span>
                    <div className={styles.galleryHeaderBoard__viewmorebtn}><span>View More</span></div>
                </div>
                <div className={styles.galleryContainer}>
                    <div className={styles.galleryContainer__galleryBox}>
                        <div className={styles.gallery}>
                            <Image alt="Illuvium_content" src="/assets/images/metaverse_gallery/illuvium_photo.png" width={230} height={200} />
                        </div>
                        <div className={styles.galleryDescContentBoard}>
                            <div className={styles.galleryDescContentBoard__galleryDesc}>
                                <Image alt="Illuvium" src="/assets/images/metaverse_gallery/Illuvium.png" width={32} height={32} />
                                <span style={{ color: "white" }} className={styles.MarketOverview__header}>Illuvium</span>
                            </div>
                            <div className={styles.galleryDescContentBoard__galleryContent}>
                                <Image alt="Illuvium" src="/assets/images/metaverse_gallery/Illuvium.png" width={24.79} height={24} />
                                <Image alt="Ethereum" src="/assets/images/metaverse_gallery/ethereum.png" width={24} height={24} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.galleryContainer__galleryBox}>
                        <div className={styles.gallery}>
                            <Image alt="Lalaverse_content" src="/assets/images/metaverse_gallery/Lalaverse_photo.png" width={230} height={200} />
                        </div>
                        <div className={styles.galleryDescContentBoard}>
                            <div className={styles.galleryDescContentBoard__galleryDesc}>
                                <Image alt="Lalaverse" src="/assets/images/metaverse_gallery/Lalaverse.png" width={32} height={32} />
                                <span style={{ color: "white" }} className={styles.MarketOverview__header}>Lalaverse</span>
                            </div>
                            <div className={styles.galleryDescContentBoard__galleryContent}>
                                <Image alt="Ethereum" src="/assets/images/metaverse_gallery/ethereum.png" width={24} height={24} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.galleryContainer__galleryBox}>
                        <div className={styles.gallery}>
                            <Image alt="SandBox_content" src="/assets/images/metaverse_gallery/SandBox_photo.png" width={230} height={200} />
                        </div>
                        <div className={styles.galleryDescContentBoard}>
                            <div className={styles.galleryDescContentBoard__galleryDesc}>
                                <Image alt="Sandbox" src="/assets/images/metaverse_gallery/Sandbox.png" width={32} height={32} />
                                <span style={{ color: "white" }} className={styles.MarketOverview__header}>Sandbox</span>
                            </div>
                            <div className={styles.galleryDescContentBoard__galleryContent}>
                                <Image alt="Sandbox" src="/assets/images/metaverse_gallery/Sandbox.png" width={24.79} height={24} />
                                <Image alt="Ethereum" src="/assets/images/metaverse_gallery/ethereum.png" width={24} height={24} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}