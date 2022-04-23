import { useEffect, useState } from 'react'

import { User } from '../types/user'

import { fetchUsersArray } from '../utils/fetchUsersArray'

export const useFetchUsers = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [users, setUsers] = useState<User[] | null>(null)

  useEffect(() => {
    setLoading(true)

    fetchUsersArray()
      .catch((error: Error) => setError(error.message))
      .then((data: User[]) => setUsers(data))
      .finally(() => setLoading(false))
  }, [])

  return { loading, error, users }
}
