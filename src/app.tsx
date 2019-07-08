import React from 'react'
import { Button, CssBaseline, Typography } from '@material-ui/core'
import { useCurrentUser } from './hooks/use-current-user'
import { useRepository } from './hooks/use-repository'

export const App: React.FunctionComponent = () => {
  const usr = useCurrentUser()
  const repo = useRepository()

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
      <CssBaseline />
      <Typography variant="h3">
        <Button onClick={() => repo.authentication.logout()}>anyád, {usr.Name} 💖</Button>
      </Typography>
    </div>
  )
}
