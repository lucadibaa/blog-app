import axios from "axios"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Layout from "../components/layout/Layout"
import { register } from "../redux/actions/authActions"

const Register = () => {

    const [userData, setUserData] = useState({ firstName: '', lastName: '', email: '', password: '', cf_password: '' })
    const { user, errors } = useSelector(state => state.auth)

    const router = useRouter()
    const dispatch = useDispatch()

    useEffect(() => {
        if (Object.keys(user).length > 0) router.replace('/')
    }, [user, router])

    const { firstName, lastName, email, password, cf_password } = userData

    const handleInput = e => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        dispatch(register(userData))
    }

    return (
        <Layout>
            <Head>
                <title>Next Blog App | Register</title>
            </Head>

            <main className="bg-snow h-screen">
                <form className="w-4/5 mx-auto relative top-[15%] p-4 border rounded shadow xl:top-1/4" onSubmit={handleSubmit}>
                    <div className="grid xl:grid-cols-2 xl:gap-6">
                        <div className="relative z-0 mb-8 w-full group">
                            <input type="text" className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-dolphin peer ${errors?.firstName && 'focus:border-red-600'}`} placeholder=" " value={firstName} name="firstName" onChange={e => handleInput(e)} />
                            <label className={`absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-dolphin peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${errors?.firstName && 'peer-focus:text-red-600'}`}>First name</label>
                            {errors?.firstName && <p className="absolute text-sm text-red-600">{errors?.firstName}</p>}
                        </div>
                        <div className="relative z-0 mb-8 w-full group">
                            <input type="text" className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-dolphin peer ${errors?.lastName && 'focus:border-red-600'}`} placeholder=" " value={lastName} name="lastName" onChange={e => handleInput(e)} />
                            <label className={`absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-dolphin peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${errors?.lastName && 'peer-focus:text-red-600'}`}>Last name</label>
                            {errors?.lastName && <p className="absolute text-sm text-red-600">{errors?.lastName}</p>}
                        </div>
                    </div>
                    <div className="relative z-0 mb-8 w-full group">
                        <input type="email" className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-dolphin peer ${errors?.email && 'focus:border-red-600'}`} placeholder=" " value={email} onChange={e => handleInput(e)} name="email" />
                        <label className={`absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-dolphin peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${errors?.email && 'peer-focus:text-red-600'}`}>Email address</label>
                        {errors?.email && <p className="absolute text-sm text-red-600">{errors?.email}</p>}
                    </div>
                    <div className="relative z-0 mb-8 w-full group">
                        <input type="password" className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-dolphin peer ${errors?.password && 'focus:border-red-600'}`} placeholder=" " value={password} onChange={e => handleInput(e)} name="password" />
                        <label className={`absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-dolphin peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${errors?.password && 'peer-focus:text-red-600'}`}>Password</label>
                        {errors?.password && <p className="absolute text-sm text-red-600">{errors?.password}</p>}
                    </div>
                    <div className="relative z-0 mb-8 w-full group">
                        <input type="password" className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-dolphin peer ${errors?.cf_password && 'focus:border-red-600'}`} placeholder=" " value={cf_password} onChange={e => handleInput(e)} name="cf_password" />
                        <label className={`absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-dolphin peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${errors?.cf_password && 'peer-focus:text-red-600'}`}>Confirm password</label>
                        {errors?.cf_password && <p className="absolute text-sm text-red-600">{errors?.cf_password}</p>}
                    </div>
                    <button type="submit" className="text-white bg-dolphin hover:bg-marine font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center transition">Register</button>
                    <p className="mt-2 text-sm text-gray-500">Already have an account ? <Link href="/login" passHref><span className="font-medium text-blue-600 hover:underline cursor-pointer">Login</span></Link>.</p>
                </form>
            </main>
        </Layout>
    )
}

export default Register
