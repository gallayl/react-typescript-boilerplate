import React from 'react'
import { CssBaseline, Typography } from '@material-ui/core'
import { CounterContainer } from './counter-container'
/**
 * The main entry point of your app. You can start h@cking from here ;)
 */
export const App: React.FunctionComponent = () => {
  return (
    <div
      style={{
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto',
      }}>
      <CssBaseline />
      <Typography variant="h3" gutterBottom>
        Hello World! 😎
      </Typography>
      <div>
        <CounterContainer />
      </div>
    </div>
  )
}
