import { ChartPieIcon, CollectionIcon, HomeIcon, LoginIcon, UserIcon } from '@heroicons/react/outline'
import Link from "next/link"
import { useRouter } from "next/router"
import { useSelector } from 'react-redux'

const BottomNavigation = () => {

    const router = useRouter()

    const { user } = useSelector(state => state.auth)

    const isActive = route => {
        if (route === router.pathname) {
            return 'bg-azure'
        } else {
            return ''
        }
    }

    const tabs = [
        {
            title: '',
            icon: <HomeIcon />
        },
        {
            title: 'Posts',
            icon: <CollectionIcon />
        },
        {
            title: Object.keys(user).length > 0 ? 'Profile' : 'Login',
            icon: Object.keys(user).length > 0 ? <UserIcon /> : < LoginIcon />
        },
        // {
        //     title: 'Dashboard',
        //     icon: <ChartPieIcon />
        // }
    ]

    return (
        <div /* className="sm:hidden"*/>
            <div className="w-11/12 max-w-sm left-0 right-0 mx-auto h-12 fixed bottom-4 z-50 bg-gray-300/70 rounded-full shadow flex items-center">
                <ul className="flex justify-evenly items-center w-full h-full">
                    {
                        tabs.map(t => (
                            <Link key={t.title} href={`/${t.title.toLowerCase()}`}>
                                <li className={`flex items-center justify-center px-4 py-1.5 rounded-full cursor-pointer ${isActive(`/${t.title.toLowerCase()}`)}`}                                >
                                    <span className="h-6 w-6 text-gray-800">
                                        {t.icon}
                                    </span>
                                    {/* <div className="flex w-full font-medium cursor-pointer">
                                     <span className={`absolute text-snow font-normal text-[.92em] tracking-[.05em] transition duration-500 trasform translate-y-11 opacity-0 ${t.title === active && 'translate-y-8 opacity-100'}`}>
                                     {t.title}
                                     </span>
                                    </div> */}
                                </li>
                            </Link>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default BottomNavigation
