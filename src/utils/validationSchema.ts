import * as Yup from 'yup'
import { UserProfile } from '../types/user'

export const validationSchema = Yup.object<Record<keyof UserProfile, Yup.AnySchema>>().shape({
  name: Yup.string()
    .min(6, 'Данное поле должно иметь длину более 6 символов')
    .max(20, 'Данное поле должно иметь длину не более 20 символов')
    .required('Пожалуйста, заполните это поле'),
  username: Yup.string()
    .min(6, 'Данное поле должно иметь длину более 6 символов')
    .max(20, 'Данное поле должно иметь длину не более 20 символов')
    .required('Пожалуйста, заполните это поле'),
  email: Yup.string()
    .email('Email должен иметь общепринятый вид адреса электронной почты')
    .required('Пожалуйста, заполните это поле'),
  street: Yup.string()
    .min(6, 'Данное поле должно иметь длину более 6 символов')
    .max(20, 'Данное поле должно иметь длину не более 20 символов')
    .required('Пожалуйста, заполните это поле'),
  city: Yup.string()
    .min(6, 'Данное поле должно иметь длину более 6 символов')
    .max(20, 'Данное поле должно иметь длину не более 20 символов')
    .required('Пожалуйста, заполните это поле'),
  zipcode: Yup.string()
    .matches(/(^\d{5}$)|(^\d{5}-\d{4}$)/, 'Неверное написание почтового кода')
    .required('Пожалуйста, заполните это поле'),
  phone: Yup.string()
    .matches(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
      'Неверное написание телефона'
    )
    .required('Пожалуйста, заполните это поле'),
  website: Yup.string()
    .matches(
      /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi,
      'Неверное заполнение интернет-ресурса'
    )
    .required('Пожалуйста, заполните это поле'),
})