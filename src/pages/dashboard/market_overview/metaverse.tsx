import { Icon } from '@iconify/react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import styles from './style.module.scss';

const combo_box_theme = createTheme({
    components: {
      MuiAutocomplete: {
        styleOverrides: {
          inputRoot: {
            fontColor: 'Aeonik',
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '16px',
          },
        },
      },
    },
  });
export default function Metaverse() {
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
                <ThemeProvider theme={combo_box_theme}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={['Last 7days']}
                        sx={{width: 180,height: 40 }}
                        renderInput={(params) => <TextField {...params} label="" />}
                    />
                </ThemeProvider>
                <div className={styles.chartoptionlist}>
                    <div className={styles.chartoptionlist__chartcolor} style={{backgroundColor :'#D100BC'}}></div>
                </div>
            </div>
        </div>
    )
}