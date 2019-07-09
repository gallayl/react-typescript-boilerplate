import React, { createContext, useEffect, useState } from 'react'
import { FormsAuthenticationService, LoginState, Repository } from '@sensenet/client-core'
import { RepositoryConfiguration } from '@sensenet/client-core/dist/Repository/RepositoryConfiguration'
import { CircularProgress } from '@material-ui/core'
import { LoginForm } from '../components/login-form'

/**
 * React context that stores a sensenet Repository object
 */
export const RepositoryContext = createContext(new Repository())

/**
 * The last repository will be stored in your local storage with this key
 */
export const lastRepositoryKey = 'sn-boilerplate-last-repository'

/**
 * Container component that will provide a Repository object through a Context
 * @param props The repository settings
 */
export const RepositoryProvider: React.FunctionComponent<
  Omit<Partial<RepositoryConfiguration>, 'repositoryUrl'>
> = props => {
  const [currentRepoUrl, setCurrentRepoUrl] = useState(localStorage.getItem(lastRepositoryKey) || '')
  const [currentRepo, setCurrentRepo] = useState(new Repository({ ...props, repositoryUrl: currentRepoUrl }))

  const [loginState, setLoginState] = useState(LoginState.Unknown)

  useEffect(() => {
    localStorage.setItem(lastRepositoryKey, currentRepoUrl)
    const repo = new Repository({ ...props, repositoryUrl: currentRepoUrl })
    FormsAuthenticationService.Setup(repo)
    setCurrentRepo(repo)
    const observable = repo.authentication.state.subscribe(state => setLoginState(state), true)
    return () => observable.dispose()
  }, [currentRepoUrl, props])

  return (
    <RepositoryContext.Provider value={currentRepo}>
      {loginState === LoginState.Pending ? <CircularProgress /> : null}
      {loginState === LoginState.Authenticated ? props.children : null}
      {loginState === LoginState.Unauthenticated || loginState === LoginState.Unknown ? (
        <LoginForm
          onLogin={(username, password, repoUrl) => {
            setCurrentRepoUrl(repoUrl)
            currentRepo.authentication.login(username, password)
          }}
        />
      ) : null}
    </RepositoryContext.Provider>
  )
}
