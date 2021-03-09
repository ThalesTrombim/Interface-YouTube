import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({

    drawer: {
      width: 240,
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
      color: 'white',
    },    
}));
