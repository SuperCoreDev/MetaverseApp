import Scrollbar from 'src/components/scrollbar/Scrollbar';
import { Icon } from '@iconify/react';
import {MenuItem, Select,SelectChangeEvent } from '@mui/material';
import { useState , ReactNode } from "react";
import Image from 'next/image'

import styles from './style.module.scss';



export default function Metaverse() {

    return (
        
            <div className={styles.MarketOverview__metaversegallery}>
                <div className={styles.galleryHeaderBoard}>
                    <span className={styles.galleryHeaderBoard__headerTitle}>Top 3 Metaverses</span>
                    <div className={styles.galleryHeaderBoard__viewmorebtn}><span>View More</span></div>
                </div>
                <Scrollbar sx={{height:1}}>
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
                </Scrollbar>
            </div>
    )
}