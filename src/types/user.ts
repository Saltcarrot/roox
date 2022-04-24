export type sort = 'city' | 'company'

export interface Geo {
  lat: number
  lng: number
}

export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

export interface Company {
  name: string
  catchPhrase: string
  bs: string
}

export interface User {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

export interface UserProfile {
  name: User['name']
  username: User['username']
  email: User['email']
  city: Address['city']
  street: Address['street']
  zipcode: Address['zipcode']
  phone: User['phone']
  website: User['website']
  comment?: string
}
