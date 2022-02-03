import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import Layout from '../components/layout/Layout'
import { logout } from '../redux/actions/authActions'
import requireAuth from '../server/utils/requireAuth'

const Profile = () => {
    const dispatch = useDispatch()
    const Router = useRouter()

    const handleLogout = () => {
        dispatch(logout())
        Router.push('/')
    }

    return (
        <Layout>
            <div className="text-white h-screen bg-green-700">
                profile page
            <button onClick={handleLogout}>
                    logout
            </button>
            </div>
        </Layout>
    );
}

export default requireAuth(Profile)