const cardTaskStyles = (theme) => {
  return {
    card: {
      maxWidth: 345,
      boxShadow: theme.shadows[10],
      borderRadius: 10,
      [theme.breakpoints.down("sm")]: {
        maxWidth: '90vw',
        backgroundColor: 'white',
        boxShadow: theme.shadows[2],
      }
    },
    cardContent: {
      minHeight: '70px'
    },
    cardHeader: {
      backgroundColor: '#FFBA60',
      color: 'white'
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