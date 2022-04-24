import { useEffect, useState } from 'react'

import { User } from '../types/user'

import { fetchUser, fetchUsersArray } from '../utils/fetchUsers'

export const useFetchUsers = (isSingleUser: boolean, id?: string) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const [users, setUsers] = useState<User[] | null>(null)
  const [singleUser, setSingleUser] = useState<User | null>(null)

  useEffect(() => {
    setLoading(true)

    if (isSingleUser && id) {
      fetchUser(id)
        .catch((error: Error) => setError(error.message))
        .then((user: User) => setSingleUser(user))
    } else {
      fetchUsersArray()
        .catch((error: Error) => setError(error.message))
        .then((users: User[]) => setUsers(users))
    }

    setLoading(false)
  }, [])

  return { loading, error, users, singleUser }
}
