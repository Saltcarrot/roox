import { User } from '../types/user'

export const fetchUsersArray = async (): Promise<User[] | Error> => {
  const request = await fetch('https://jsonplaceholder.typicode.com/users')

  if (request.ok) {
    return (await request.json()) as Promise<User[]>
  } else {
    throw new Error('Ошибка при получении данных')
  }
}
