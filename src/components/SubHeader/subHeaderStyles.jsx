
const subHeaderStyles = (theme) => {

  return {
    formControl: {
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
    }
  }
}

export default subHeaderStyles

