import { useContext } from 'react'
import { RepositoryContext } from '../repository-provider'

export const useRepository = () => {
  return useContext(RepositoryContext)
}
