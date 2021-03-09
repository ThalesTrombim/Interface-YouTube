import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    
  
    root: {
      height: '100vh',
    },
    appBar: {
      boxShadow: 'none',
      zIndex: theme.zIndex.drawer +1.  
    },
    logo: {
      height: 25,
    },
    drawer: {
      width: 240,
    },
    drawerPaper: {
      width: 240,
      borderRight: 'none',
      background: 'red',
      height: '90vh',
      top: '65px',
    },

    
    menuIcon: {
      paddingRight: '24px',
      paddingLeft: '24px',
    },
    icons: {
      paddingRight: '24px',
    },
    grow: {
      flexGrow: 1,
    },
    listItemText: {
      fontSize: 14,
    },
    listItem: {
      paddingTop: 4,
      paddingBottom: 4,
    },
    subheader: {
      textTransform: 'uppercase',
    },
    
    
}));
