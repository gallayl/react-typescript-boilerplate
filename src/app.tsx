import React from 'react'
import { Button, CssBaseline, Typography } from '@material-ui/core'

export const App: React.FunctionComponent = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
      <CssBaseline />
      <Typography variant="h3">
        <Button>anyád 💖</Button>
      </Typography>
    </div>
  )
}
