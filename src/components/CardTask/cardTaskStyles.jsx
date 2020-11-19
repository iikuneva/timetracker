const cardTaskStyles = (theme) => {
  return {
    card: {
      maxWidth: 345,
      minHeight: 205,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: theme.shadows[10],
      borderRadius: 10,
      [theme.breakpoints.down('sm')]: {
        maxWidth: '90vw',
        backgroundColor: 'white',
        boxShadow: theme.shadows[2],
      }
    },
    cardContent: {
      maxHeight: '70px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardHeader: {
      paddingBottom: 0
    },
    tracked: {
      display: 'flex',
      justifyContent: 'center'
    },
    icon: {
      marginRight: '0.2em',
      color: 'grey',
      verticalIlign: 'middle',
      display: 'inline'
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    }
  }
}

export default cardTaskStyles