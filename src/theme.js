import { createMuiTheme } from "@material-ui/core/styles";


// const lightGrey = '#868686';
// const darkGreen = '#15C797';

const lightGreen = '#6DAD29';
const darkGrey = '#272F3B';


export default createMuiTheme({
  palette: {
    primary: {
      main: darkGrey
    },
    secondary: {
      main: lightGreen
    }
  },
  typography: {
    fontSize: 12,
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      color: darkGrey,
      lineHeight: 1.5
    },
    h3: {
      fontWeight: 500,
      fontSize: '1.5rem',
      color: darkGrey,
      lineHeight: 1.5
    }
  },

  overrides: {
    MuiInput: {
      root: {
        color: darkGrey,
        fontWeight: 300
      }
    }
  }

})
