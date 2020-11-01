
const subHeaderStyles = (theme) => {
 
  return {
    formControl: {
      // margin: theme.spacing(1),
      minWidth: 120
    },
    menuItem: {
      '&:hover': {
        backgroundColor: '#b3e5fc'
      }
    },
    icon: {
      display: 'blok',
      color: theme.palette.primary.main,
      marginRight: '0.5em'
    },
    selectContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      margin: '0.5em 1.5em'
    },
    mainContainer: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#EDF0F2'
    }
  }
}

export default subHeaderStyles

