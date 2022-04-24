import { User } from '../types/user'

export const fetchUsersArray = async (): Promise<User[] | Error> => {
  const request = await fetch('https://jsonplaceholder.typicode.com/users')

  if (request.ok) {
    return await request.json()
  } else {
    throw new Error('Ошибка при получении данных')
  }
}

export const fetchUser = async (id: string): Promise<User | Error> => {
  const request = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  )

  if (request.ok) {
    return await request.json()
  } else {
    throw new Error('Ошибка при получении данных')
  }
}
