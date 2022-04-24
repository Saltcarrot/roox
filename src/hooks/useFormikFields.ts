import { useEffect, useState } from 'react'

import { User } from '../types/user'
import { Fields } from '../types/fields'

export const useFormikFields = (user: User, initialFields: Fields) => {
  const [fields, setFields] = useState<Fields>(initialFields)

  useEffect(() => {
    if (user) {
      const newFields = Object.entries(fields).map(([name, body]) => {
        if (user[name as keyof typeof user]) {
          return [
            name,
            {
              ...body,
              value: user[name as keyof typeof user],
            },
          ]
        } else {
          let result = ''
          Object.entries(user).forEach(([userKey, userBody]) => {
            if (
              typeof user[userKey as keyof typeof user] === 'object' &&
              userBody[name]
            ) {
              result = userBody[name]
            }
          })
          return [
            name,
            {
              ...body,
              value: result,
            },
          ]
        }
      })
      setFields(Object.fromEntries(newFields))
    }
  }, [user])

  return { fields }
}
