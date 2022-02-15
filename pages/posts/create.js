import { Form, Formik } from "formik"
import api from "../../api/axios"
import requests from "../../api/requests"
import Layout from "../../components/layout/Layout"
import TextField from "../../components/formik/TextField"
import TextArea from "../../components/formik/TextArea"
import SelectField from "../../components/formik/SelectField"
import requireAuth from "../../server/utils/requireAuth"
import { useState } from "react"
import Head from "next/head"
import { newPostSchema } from "../../components/formik/validators"
import { useRouter } from "next/router"

const CreatePost = () => {
    const [file, setFile] = useState(null)
    const router = useRouter()

    const handleImg = (img, setFieldValue) => {
        setFile(img)
        setFieldValue('image', img.name)
    }

    const handleSubmit = async (values, resetForm) => {
        const data = new FormData()
        data.append('file', file)
        data.append("upload_preset", "n4gmf79k")

        try {
            const uploadRes = await api.post(
                "https://api.cloudinary.com/v1_1/dhrwyiugp/image/upload",
                data
            )

            const { url } = uploadRes.data
            values.image = url

            try {
                const res = await api.post(requests.createPost, values)
                console.log(res)

                router.push('/posts')
                setFile(null)
                resetForm()
            } catch (err) {
                console.log({ ...err })
            }
        } catch (err) {
            console.log(err)
        }
    }

    const inputStyle = "text-gray-600 focus:outline-none focus:border focus:border-fun w-full h-10 pl-2 border border-gray-300 rounded"
    const labelStyle = "ml-0.5 font-semibold"
    const textareaStyle = "w-full p-2 focus:outline-none focus:border focus:border-fun border border-gray-300 rounded"

    return (
        <Layout>
            <Head>
                <title>New Post</title>
            </Head>

            <main className="max-w-[95%] mx-auto sm:max-w-[75%] mt-5 space-y-4">

                <h2 className="text-2xl font-semibold text-marine tracking-wide pl-3">Create Post</h2>

                <Formik
                    initialValues={{
                        title: '',
                        category: '',
                        description: '',
                        image: '',
                    }}
                    validationSchema={newPostSchema}
                    onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
                >
                    {({ values, setFieldValue }) => (
                        <Form className="space-y-4 bg-base px-4 flex flex-col py-3 justify-center">
                            <div className="flex flex-wrap -mx-2 mb-2 space-y-4 md:space-x-0">
                                <div className="px-2 md:w-1/2 w-full">
                                    <TextField inputClasses={inputStyle} labelClasses={labelStyle} label="Titolo" name="title" type="text" />
                                </div>
                                <div className="px-2 md:w-1/2 w-full">
                                    <SelectField className={inputStyle} labelClasses={labelStyle} options={[{ key: 'Seleziona', value: '' }, { key: 'categoria1', value: 'categoria1' }, { key: 'categoria2', value: 'categoria2' }]} label="Categoria" name="category" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-2 pb-2">
                                <div className="w-full px-2 md:w-1/2">
                                    <TextArea textareaStyle={textareaStyle} labelClasses={labelStyle} label="Descrizione" name="description" placeholder="Scrivi il testo del post qua..." rows="10" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-2 pb-2">
                                <div className="px-2 md:w-1/3 w-full">
                                    <TextField inputClasses={'text-gray-600 focus:outline-none focus:border focus:border-fun w-full border border-gray-300 rounded flex items-center p-2'} labelClasses={labelStyle} label="Carica Immagine" name="image" type="file" onChange={e => handleImg(e.target.files[0], setFieldValue)} />
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <input type="submit" value="Aggiungi" className="cursor-pointer rounded-md mt-2 border border-gray-300 shadow-sm px-3.5 py-1.5 bg-white font-medium hover:bg-gray-50 focus:outline-none transform transition-all duration-150 ease-in-out focus:scale-95 w-auto text-md" />
                            </div>
                        </Form>
                    )}
                </Formik>
            </main>
        </Layout>
    )
}

export default requireAuth(CreatePost, true)
