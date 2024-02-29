import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Accueil',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: ''
    }
  },
  {
    title: true,
    name: 'Theme'
  },
  {
    name: 'Profile',
    url: '/theme/colors',
    iconComponent: { name: 'cil-user' }
  },
  {
    name: 'Utilisateur & groupes',
    url: '/theme/typography',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-user' }
  },
 
 
  {
    name: 'publication',
    url: '/charts',
    iconComponent: { name: 'cil-list' }
  },
 
  {
    name: 'Déconnexion',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Se déconnecter',
        url: '/login'
      },
    
    ]
  },
  
];
