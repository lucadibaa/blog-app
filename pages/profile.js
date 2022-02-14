import Image from 'next/image'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../components/layout/Layout'
import { logout } from '../redux/actions/authActions'
import requireAuth from '../server/utils/requireAuth'

const Profile = () => {
    const dispatch = useDispatch()
    const Router = useRouter()
    const { user } = useSelector(state => state.auth)

    const handleLogout = () => {
        dispatch(logout())
        Router.push('/')
    }

    return (
        <Layout>
            <main className="text-white w-screen h-screen pt-5 bg-fun/20 space-y-28">

                <div className="flex items-center justify-between px-5">
                    {
                        user.role === 'admin' ?
                            <button onClick={() => Router.push('/posts/create')} className="text-sm rounded font-medium tracking-wider text-[#484848] px-5 py-2 transition-all border border-mosque/40 hover:border-mosque bg-pastel/20 hover:bg-pastel/30">
                                CREATE
                            </button>
                            : <div />
                    }
                    <button onClick={handleLogout} className="text-sm text-marine rounded font-medium tracking-wider px-5 py-2 transition-all border border-gray-500/40 hover:border-gray-500 bg-gray-500/20 ">
                        LOGOUT
                    </button>
                </div>

                <div className="relative bg-snow text-[#484848] w-4/5 h-3/5 m-auto rounded-lg shadow">
                    <div className="absolute left-0 right-0 mx-auto -top-10 rounded-full w-20 h-20">
                        <Image
                            layout="fill"
                            src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg"
                            alt="avatar"
                            objectFit="cover"
                            className="rounded-full"
                        />
                    </div>
                    <div className="pt-16 px-5 space-y-2.5">
                        <h4 className="text-xl text-center font-semibold text-gray-800 mb-2">{user.firstName + ' ' + user.lastName}</h4>
                        <div className="flex items-center justify-between">
                            <span className="border-b border-dolphin">Post che ti piacciono</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="border-b border-dolphin">Post commentati</span>
                        </div>
                        <div className="text-xs pt-20">
                            questa sezione è un incubo aiuto non so cosa mettere
                        </div>
                    </div>
                </div>

            </main>
        </Layout>
    );
}

export default requireAuth(Profile)