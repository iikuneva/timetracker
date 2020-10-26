import './App.css'

// Screens
import Login from '../src/components/Login/Login'

// Theme
import { ThemeProvider } from '@material-ui/core/styles'
import customTheme from './theme'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={customTheme}>
        <Login />
      </ThemeProvider>
    </div>
  )
}

export default App;
