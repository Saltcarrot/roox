import { User } from '../types/user'

// .localeCompare() возвращает число, обозначающее
// на каком месте должна быть исходная строка
// относительно строки, которая передается в качестве параметра

export const sortUsersByCity = (a: User, b: User) => {
  return a.address.city
    .toLowerCase()
    .localeCompare(b.address.city.toLowerCase())
}

export const sortUsersByCompany = (a: User, b: User) => {
  return a.company.name
    .toLowerCase()
    .localeCompare(b.company.name.toLowerCase())
}
