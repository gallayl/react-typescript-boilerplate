import React from 'react'
import { Button, CssBaseline, Tooltip, Typography } from '@material-ui/core'
import { useCurrentUser } from './hooks/use-current-user'
import { useRepository } from './hooks/use-repository'

export const App: React.FunctionComponent = () => {
  const usr = useCurrentUser()
  const repo = useRepository()
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
      }}>
      <CssBaseline />
      <Typography variant="h3" gutterBottom>
        Hello, {usr.Name} 😎
      </Typography>
      <Tooltip title="Return to the Login screen and select another repository">
        <Button variant="outlined" color="primary" onClick={() => repo.authentication.logout()}>
          Log out 🚪
        </Button>
      </Tooltip>
    </div>
  )
}
