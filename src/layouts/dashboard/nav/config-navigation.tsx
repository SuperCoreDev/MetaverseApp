// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{width: 1, height: 1, backgroundColor: name==="ic_logout" ? "red" : "white"  }} />
);

const ICONS = {
  dashboard: icon('ic_dashboard'),
  metaverse: icon('ic_metaverse'),
  nfts: icon('ic_nfts'),
  hiretalent: icon('ic_hiretalent'),
  workastalent: icon('ic_workastalent'),
  marketplace: icon('ic_marketplace'),
  avatar: icon('ic_avatar'),
  staking: icon('ic_staking'),
  academy : icon('ic_academy'),
  addwallet : icon('ic_addwallet'),
  ethereum : icon('ic_ethereum'),
  settings: icon('ic_setting'),
  logout:icon('ic_logout')
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'general v4.3.0',
    items: [
      { title: 'Dashboard', path: PATH_DASHBOARD.one, icon: ICONS.dashboard },
      { title: 'Metaverse', path: PATH_DASHBOARD.two, icon: ICONS.metaverse },
      { title: 'NFTs', path: PATH_DASHBOARD.one, icon: ICONS.nfts },
      { title: 'Hire Talent', path: PATH_DASHBOARD.one, icon: ICONS.hiretalent },
      { title: 'Work as Talent', path: PATH_DASHBOARD.one, icon: ICONS.workastalent },
      { title: 'Marketplace', path: PATH_DASHBOARD.one, icon: ICONS.marketplace },
      { title: 'Avatar', path: PATH_DASHBOARD.one, icon: ICONS.avatar },
      { title: 'Staking', path: PATH_DASHBOARD.one, icon: ICONS.staking },
      { title: 'Academy', path: PATH_DASHBOARD.one, icon: ICONS.academy },
    ],
  },

  // Add Wallet
  {
    subheader: 'Add Wallet',
    items: [
      {
        title: 'Add Wallet',
        path: PATH_DASHBOARD.one,
        // icon: ICONS.addwallet,
        children: [
          { title: 'Ethereum', path: PATH_DASHBOARD.one},
        ],
      },
    ],
  },

   // Setting & Log Out
   {
    subheader: 'Setting & Log Out',
    items: [
      { title: 'Setting', path: PATH_DASHBOARD.one, icon: ICONS.settings },
      { title: 'Log Out', path: PATH_DASHBOARD.one, icon: ICONS.logout },
    ]
  }
  // MANAGEMENT
  // ----------------------------------------------------------------------
  // {
  //   subheader: 'management',
  //   items: [
  //     {
  //       title: 'user',
  //       path: PATH_DASHBOARD.user.root,
  //       icon: ICONS.user,
  //       children: [
  //         { title: 'Four', path: PATH_DASHBOARD.user.four },
  //         { title: 'Five', path: PATH_DASHBOARD.user.five },
  //         { title: 'Six', path: PATH_DASHBOARD.user.six },
  //       ],
  //     },
  //   ],
  // },
];

export default navConfig;
