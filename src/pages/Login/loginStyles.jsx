
const loginStyles = (theme) => {
    return {
        mainContainer: {
            marginTop: '5em'
        },
        icon: {
            height: '1.2em',
            width: '1.2em',
            marginRight: '1em'
        },
        link: {
            fontSize: '0.8em',
            fontWeight: 600,
            textDecoration: 'none'
        },
        hrLine: {
            width: '95%',
            display: 'flex',
            flexDirection: 'row',
            color: '#868686',

            '&::before': {
                content: '""',
                flexGrow: 1,
                borderBottom: '1px solid #868686',
                margin: 'auto',
                marginRight: '0.5em'
            },
            '&::after': {
                content: '""',
                flexGrow: 1,
                borderBottom: '1px solid #868686',
                margin: 'auto',
                marginLeft: '0.5em'
            }
        },
        input: {
            "&:-webkit-autofill": {
                WebkitBoxShadow: "0 0 0 1000px white inset"
              }
        }
    }
}

export default loginStyles

