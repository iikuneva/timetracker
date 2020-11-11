import React from 'react'
import './App.css'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

// Screens
import Login from '../src/pages/Login/Login'
import Register from '../src/pages/Register/Register'
import UserHome from '../src/pages/UserHome/UserHome'

// Theme
import { ThemeProvider } from '@material-ui/core/styles'
import customTheme from './theme'

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={customTheme}>
        <BrowserRouter>
        <Switch>
          <Route
            exact
            path='/user'
            component={UserHome}
          />
          <Route
            exact
            path='/login'
            component={Login}
          />
             <Route
            exact
            path='/register'
            component={Register}
          />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App
