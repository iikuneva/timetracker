import { createMuiTheme } from '@material-ui/core/styles'

const blue = '#1A91DA'
const lightBlue = '#b3e5fc'

export default createMuiTheme({
  palette: {
    primary: {
      main: blue
    },
    action: {
      disabledBackground: lightBlue,
      disabled: 'white'
    }

  },
  typography: {
    fontSize: 12,
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.5
    },
    h3: {
      fontWeight: 500,
      fontSize: '1.5rem',
      lineHeight: 1.5
    }
  }

})
