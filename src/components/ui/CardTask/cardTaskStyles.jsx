const cardTaskStyles = (theme) => {
  return {
    card: {
      maxWidth: 345,
      // position: "absolute",
      boxShadow: theme.shadows[10],
      // borderRadius: 15
    },
    cardHeader: {
      backgroundColor: '#b3e5fc',
      color: 'white'
    },
    dueDate: {
      color: 'red'
    },
    tracked: {
      display: 'flex',
      justifyContent: 'center'
    },
    icon: {
      marginRight: '0.2em',
      // color: theme.palette.primary.main,
      color: 'grey',
      verticalIlign: 'middle',
      display: 'inline'
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
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