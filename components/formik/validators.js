import * as yup from 'yup'

export const newPostSchema = yup.object().shape({
    title: yup.string().min(4, 'Il titolo deve avere almeno 4 caratteri').required('Obbligatorio'),
    category: yup.string().required('Obbligatorio'),
    description: yup.string().required('Obbligatorio'),
    image: yup.string().required('Obbligatorio')
})
