import React from 'react'
import './App.css'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

// Screens
import Login from '../src/components/Login/Login'
import Register from '../src/components/Register/Register'
import Header from '../src/components/ui/Header/Header'

// Theme
import { ThemeProvider } from '@material-ui/core/styles'
import customTheme from './theme'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={customTheme}>
        <BrowserRouter>
        <Header />
        <Switch>
          {/* <Route
            exact
            path="/user"
            component={User}
          /> */}
          <Route
            exact
            path="/login"
            component={Login}
          />
             <Route
            exact
            path="/register"
            component={Register}
          />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App;
