import React from 'react'
import CssBaseLine from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import { CounterContainer } from './counter-container'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { Readme } from './readme'
/**
 * The main entry point of your app. You can start h@cking from here ;)
 */
export const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <div
        style={{
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto',
        }}>
        <CssBaseLine />
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" >
              <Link to="/">
                Home
            </Link> |&nbsp;
              <Link to="/readme">
                Readme
            </Link>
            </Typography>
            <div style={{ flex: 1 }} />
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>

        <Switch>
          <Route path='/readme' component={Readme} />
          <Route component={CounterContainer} />
        </Switch>
      </div>
    </BrowserRouter>

  )
}
