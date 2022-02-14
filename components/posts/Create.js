import Link from "next/link"
import requireAuth from "../../server/utils/requireAuth"

const Create = () => {
    return (
        <Link href="/posts/create" passHref>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-marine" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </Link>
    )
}

export default requireAuth(Create, true)
