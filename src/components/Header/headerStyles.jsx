
const headerStyles = (theme) => {
    return {
        logoContainer: {
            padding: 0,
            color: 'white',
            fontFamily: 'Carter One, cursive',
            fontSize: '1.2em',
            '&:hover': {
              backgroundColor: 'transparent'
            }
        },
        tabContainer: {
            marginLeft: 'auto',
            paddingRight: 0
          },
        icon: {
            marginRight: '0.5em',
            width: '1.5em',
            height: '1.5em',
        }
    }
}

export default headerStyles

